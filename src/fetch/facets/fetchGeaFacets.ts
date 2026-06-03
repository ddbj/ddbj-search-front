import type { GeaFacetListRequestParams, GeaFacetListResponse } from "@/api/facets/gea.ts";
import { API_PATH_GEA_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { GeaSearchParams } from "@/schema/search/gea.ts";

export const fetchGeaFacets = async (params: GeaSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(`${API_PATH_GEA_FACET_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as GeaFacetListResponse;
  return data;
};

const parseParams = (params: GeaSearchParams): GeaFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchGeaFacets = {
  parseParams,
};
