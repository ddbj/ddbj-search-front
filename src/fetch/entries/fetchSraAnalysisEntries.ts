import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraAnalysisListRequestParams } from "@/api/entries/sraAnalysis.ts";
import type { SraAnalysisSearchParams } from "@/schema/search/sraAnalysis.ts";

export const fetchSraAnalyses = async (params: SraAnalysisSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_ANALYSIS_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: SraAnalysisSearchParams): SraAnalysisListRequestParams => {
  return {
    ...parseBaseParams(params),
    // Add SRA Analysis-specific parameters here if needed
  };
};

export const __TEST__fetchSraAnalysisEntries = {
  parseParams,
};
