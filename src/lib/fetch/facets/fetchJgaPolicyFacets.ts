import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  JgaPolicyFacetListRequestParams,
  JgaPolicyFacetListResponse,
} from "@/schema/api/facets/jgaPolicy.ts";
import { API_PATH_JGA_POLICY_FACET_LIST } from "@/schema/api/paths.ts";
import type { JgaPolicySearchParams } from "@/schema/search/jgaPolicy.ts";
export const fetchJgaPolicyFacets = async (params: JgaPolicySearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_POLICY_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as JgaPolicyFacetListResponse;
  return data;
};

const parseParams = (params: JgaPolicySearchParams): JgaPolicyFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchJgaPolicyFacets = {
  parseParams,
};
