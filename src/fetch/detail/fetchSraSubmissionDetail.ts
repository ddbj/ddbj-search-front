import type { SraSubmissionDetailResponse } from "@/api/detail/sraSubmission.ts";
import { API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";

export const fetchSraSubmissionDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_SUBMISSION_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraSubmissionDetailResponse>(response);
};
