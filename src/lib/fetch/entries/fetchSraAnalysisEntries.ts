import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { SraAnalysisListRequestParams } from "@/schema/api/entries/sraAnalysis.ts";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/schema/api/paths.ts";
import type { SraAnalysisSearchParams } from "@/schema/search/sraAnalysis.ts";

export const fetchSraAnalyses = async (params: SraAnalysisSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_SRA_ANALYSIS_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: SraAnalysisSearchParams): SraAnalysisListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraAnalysisEntries = {
  parseParams,
};
