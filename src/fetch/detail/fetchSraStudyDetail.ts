import { API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import type { SraStudyDetailResponse } from "@/api/detail/sraStudy.ts";

export const fetchSraStudyDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_STUDY_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as SraStudyDetailResponse;
  return data;
};
