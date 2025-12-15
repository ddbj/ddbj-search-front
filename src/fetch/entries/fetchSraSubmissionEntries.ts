import { API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraSubmissionListRequestParams } from "@/api/entries/sraSubmission.ts";
import type { SraSubmissionSearchParams } from "@/schema/search/sraSubmission.ts";

export const fetchSraSubmissions = async (params: SraSubmissionSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_SUBMISSION_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: SraSubmissionSearchParams): SraSubmissionListRequestParams => {
  return {
    ...parseBaseParams(params),
    // Add SRA Submission-specific parameters here if needed
  };
};

export const __TEST__fetchSraSubmissionEntries = {
  parseParams,
};
