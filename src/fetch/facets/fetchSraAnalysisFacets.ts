import { API_PATH_SRA_ANALYSIS_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type {
  SraAnalysisFacetListRequestParams,
  SraAnalysisFacetListResponse,
} from "@/api/facets/sraAnalysis.ts";
import type { SraAnalysisSearchParams } from "@/schema/search/sraAnalysis.ts";
export const fetchSraAnalysisFacets = async (params: SraAnalysisSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_ANALYSIS_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as SraAnalysisFacetListResponse;
  return data;
};

const parseParams = (params: SraAnalysisSearchParams): SraAnalysisFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchSraAnalysisFacets = {
  parseParams,
};
