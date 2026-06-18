import type { SraStudyDetailResponse } from "@/api/detail/sraStudy.ts";
import { API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";

export const fetchSraStudyDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_STUDY_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraStudyDetailResponse>(response);
};
