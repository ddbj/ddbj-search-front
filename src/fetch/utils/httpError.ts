export type ApiProblemDetails = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
  timestamp?: string;
  requestId?: string;
  [key: string]: unknown;
};

type AppHttpErrorOptions = {
  status: number;
  statusText: string;
  url: string;
  requestId?: string;
  problem?: ApiProblemDetails;
  body?: unknown;
};

export class AppHttpError extends Error {
  status: number;
  statusText: string;
  url: string;
  requestId?: string;
  problem?: ApiProblemDetails;
  body?: unknown;

  constructor(message: string, options: AppHttpErrorOptions) {
    super(message);
    this.name = "AppHttpError";
    this.status = options.status;
    this.statusText = options.statusText;
    this.url = options.url;
    this.requestId = options.requestId;
    this.problem = options.problem;
    this.body = options.body;
  }
}

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const isApiProblemDetails = (value: unknown): value is ApiProblemDetails => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.status === "number" ||
    typeof value.title === "string" ||
    typeof value.detail === "string" ||
    typeof value.requestId === "string"
  );
};

const buildErrorMessage = (response: Response, problem?: ApiProblemDetails) => {
  return (
    problem?.detail ??
    problem?.title ??
    (response.statusText || `Request failed with status ${response.status}`)
  );
};

const parseResponseBody = async (response: Response) => {
  const contentType = response.headers.get("content-type") ?? "";
  const canParseJson = contentType.includes("json");

  if (!canParseJson) {
    return undefined;
  }

  try {
    return await response.json();
  } catch {
    return undefined;
  }
};

export const createAppHttpError = async (response: Response) => {
  const body = await parseResponseBody(response);
  const problem = isApiProblemDetails(body) ? body : undefined;

  return new AppHttpError(buildErrorMessage(response, problem), {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    requestId: problem?.requestId ?? response.headers.get("x-request-id") ?? undefined,
    problem,
    body,
  });
};

export const parseJsonResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw await createAppHttpError(response);
  }

  return (await response.json()) as T;
};

export const isAppHttpError = (error: unknown): error is AppHttpError => {
  return error instanceof AppHttpError;
};
