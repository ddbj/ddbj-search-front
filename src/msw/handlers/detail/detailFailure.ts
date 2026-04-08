import { HttpResponse } from "msw";

type ApiProblemDetails = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  requestId: string;
};

const missingPrefix = "NOTFOUND";
const serverErrorPrefix = "ERROR500";

export const createProblemDetailResponse = (problem: ApiProblemDetails) => {
  return HttpResponse.json(problem, {
    status: problem.status,
    headers: {
      "content-type": "application/problem+json",
      "x-request-id": problem.requestId,
    },
  });
};

export const resolveDetailFailureResponse = (identifier: string, instance: string) => {
  if (identifier.startsWith(missingPrefix)) {
    return createProblemDetailResponse({
      type: "about:blank",
      title: "Not Found",
      status: 404,
      detail: `${identifier} was not found`,
      instance,
      requestId: `${identifier.toLowerCase()}-request-id`,
    });
  }

  if (identifier.startsWith(serverErrorPrefix)) {
    return createProblemDetailResponse({
      type: "about:blank",
      title: "Internal Server Error",
      status: 500,
      detail: `Mock server error for ${identifier}`,
      instance,
      requestId: `${identifier.toLowerCase()}-request-id`,
    });
  }

  return null;
};

export const __TEST__detailFailure = {
  createProblemDetailResponse,
  resolveDetailFailureResponse,
};
