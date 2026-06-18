import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraSubmissionListRequestParams } from "@/api/entries/sraSubmission.ts";
import { API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import type { SraSubmissionSearchParams } from "@/schema/search/sraSubmission.ts";

export const fetchSraSubmissions = async (params: SraSubmissionSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_SRA_SUBMISSION_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: SraSubmissionSearchParams): SraSubmissionListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraSubmissionEntries = {
  parseParams,
};
