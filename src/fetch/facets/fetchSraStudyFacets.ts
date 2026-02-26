import { API_PATH_SRA_STUDY_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type {
  SraStudyFacetListRequestParams,
  SraStudyFacetListResponse,
} from "@/api/facets/sraStudy.ts";
import type { SraStudySearchParams } from "@/schema/search/sraStudy.ts";
export const fetchSraStudyFacets = async (params: SraStudySearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_STUDY_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as SraStudyFacetListResponse;
  return data;
};

const parseParams = (params: SraStudySearchParams): SraStudyFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchSraStudyFacets = {
  parseParams,
};
