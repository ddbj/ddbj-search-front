import { API_PATH_JGA_DAC_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import type { JgaDacFacetListRequestParams } from "@/api/facets/jgaDac.ts";
import type { JgaDacSearchParams } from "@/schema/search/jgaDac.ts";

export const fetchJgaDacFacets = async (params: JgaDacSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_DAC_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BaseFacetListResponse;
  return data;
};

const parseParams = (params: JgaDacSearchParams): JgaDacFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchJgaDacFacets = {
  parseParams,
};
