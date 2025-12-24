import { API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import type { SraSubmissionDetailResponse } from "@/api/detail/sraSubmission.ts";

export const fetchSraSubmissionDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_SUBMISSION_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as SraSubmissionDetailResponse;
  return data;
};
