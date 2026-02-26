import { API_PATH_JGA_POLICY_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import type { JgaPolicyFacetListRequestParams } from "@/api/facets/jgaPolicy.ts";
import type { JgaPolicySearchParams } from "@/schema/search/jgaPolicy.ts";

export const fetchJgaPolicyFacets = async (params: JgaPolicySearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_POLICY_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BaseFacetListResponse;
  return data;
};

const parseParams = (params: JgaPolicySearchParams): JgaPolicyFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchJgaPolicyFacets = {
  parseParams,
};
