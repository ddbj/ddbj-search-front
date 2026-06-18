import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  JgaDacFacetListRequestParams,
  JgaDacFacetListResponse,
} from "@/schema/api/facets/jgaDac.ts";
import { API_PATH_JGA_DAC_FACET_LIST } from "@/schema/api/paths.ts";
import type { JgaDacSearchParams } from "@/schema/search/jgaDac.ts";
export const fetchJgaDacFacets = async (params: JgaDacSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_DAC_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as JgaDacFacetListResponse;
  return data;
};

const parseParams = (params: JgaDacSearchParams): JgaDacFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchJgaDacFacets = {
  parseParams,
};
