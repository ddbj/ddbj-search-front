import { API_PATH_JGA_STUDY_LIST } from "@/api/paths.ts";
import type { JgaStudyDetailResponse } from "@/api/detail/jgaStudy.ts";

export const fetchJgaStudyDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_STUDY_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as JgaStudyDetailResponse;
  return data;
};
