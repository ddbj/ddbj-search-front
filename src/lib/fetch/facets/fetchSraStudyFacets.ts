import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  SraStudyFacetListRequestParams,
  SraStudyFacetListResponse,
} from "@/schema/api/facets/sraStudy.ts";
import { API_PATH_SRA_STUDY_FACET_LIST } from "@/schema/api/paths.ts";
import type { SraStudySearchParams } from "@/schema/search/sraStudy.ts";
export const fetchSraStudyFacets = async (params: SraStudySearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_STUDY_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as SraStudyFacetListResponse;
  return data;
};

const parseParams = (params: SraStudySearchParams): SraStudyFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraStudyFacets = {
  parseParams,
};
