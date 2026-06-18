import type {
  SraSampleFacetListRequestParams,
  SraSampleFacetListResponse,
} from "@/api/facets/sraSample.ts";
import { API_PATH_SRA_SAMPLE_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type { SraSampleSearchParams } from "@/schema/search/sraSample.ts";
export const fetchSraSampleFacets = async (params: SraSampleSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_SAMPLE_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as SraSampleFacetListResponse;
  return data;
};

const parseParams = (params: SraSampleSearchParams): SraSampleFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraSampleFacets = {
  parseParams,
};
