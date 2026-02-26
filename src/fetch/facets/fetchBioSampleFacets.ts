import { API_PATH_BIOSAMPLE_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import type { BioSampleFacetListRequestParams } from "@/api/facets/bioSample.ts";
import type { BiosampleSearchParams } from "@/schema/search/bioSample.ts";

export const fetchBioSampleFacets = async (params: BiosampleSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_BIOSAMPLE_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BaseFacetListResponse;
  return data;
};

const parseParams = (params: BiosampleSearchParams): BioSampleFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchBioSampleFacets = {
  parseParams,
};
