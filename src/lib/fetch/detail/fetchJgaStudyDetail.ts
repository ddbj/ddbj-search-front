import type { JgaStudyDetailResponse } from "@/api/detail/jgaStudy.ts";
import { API_PATH_JGA_STUDY_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";

export const fetchJgaStudyDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_STUDY_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<JgaStudyDetailResponse>(response);
};
