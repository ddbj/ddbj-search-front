import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  BioSampleFacetListRequestParams,
  BioSampleFacetListResponse,
} from "@/schema/api/facets/bioSample.ts";
import { API_PATH_BIOSAMPLE_FACET_LIST } from "@/schema/api/paths.ts";
import type { BiosampleSearchParams } from "@/schema/search/bioSample.ts";
export const fetchBioSampleFacets = async (params: BiosampleSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_BIOSAMPLE_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as BioSampleFacetListResponse;
  return data;
};

const parseParams = (params: BiosampleSearchParams): BioSampleFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchBioSampleFacets = {
  parseParams,
};
