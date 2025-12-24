import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import type { SraAnalysisDetailResponse } from "@/api/detail/sraAnalysis.ts";

export const fetchSraAnalysisDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_ANALYSIS_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as SraAnalysisDetailResponse;
  return data;
};
