import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { SraSubmissionDetailResponse } from "@/schema/api/detail/sraSubmission.ts";
import { API_PATH_SRA_SUBMISSION_LIST } from "@/schema/api/paths.ts";

export const fetchSraSubmissionDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_SUBMISSION_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraSubmissionDetailResponse>(response);
};
