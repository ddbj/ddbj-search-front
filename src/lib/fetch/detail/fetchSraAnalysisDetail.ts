import type { SraAnalysisDetailResponse } from "@/api/detail/sraAnalysis.ts";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";

export const fetchSraAnalysisDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_ANALYSIS_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraAnalysisDetailResponse>(response);
};
