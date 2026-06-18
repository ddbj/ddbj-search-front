import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  MetaboBankFacetListRequestParams,
  MetaboBankFacetListResponse,
} from "@/schema/api/facets/metaboBank.ts";
import { API_PATH_METABOBANK_FACET_LIST } from "@/schema/api/paths.ts";
import type { MetaboBankSearchParams } from "@/schema/search/metaboBank.ts";

export const fetchMetaboBankFacets = async (params: MetaboBankSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_METABOBANK_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as MetaboBankFacetListResponse;
  return data;
};

const parseParams = (params: MetaboBankSearchParams): MetaboBankFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchMetaboBankFacets = {
  parseParams,
};
