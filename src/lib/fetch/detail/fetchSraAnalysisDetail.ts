import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { SraAnalysisDetailResponse } from "@/schema/api/detail/sraAnalysis.ts";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/schema/api/paths.ts";

export const fetchSraAnalysisDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_ANALYSIS_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraAnalysisDetailResponse>(response);
};
