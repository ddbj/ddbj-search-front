import { API_PATH_SRA_RUN_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import type { SraRunFacetListRequestParams } from "@/api/facets/sraRun.ts";
import type { SraRunSearchParams } from "@/schema/search/sraRun.ts";

export const fetchSraRunFacets = async (params: SraRunSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_RUN_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BaseFacetListResponse;
  return data;
};

const parseParams = (params: SraRunSearchParams): SraRunFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchSraRunFacets = {
  parseParams,
};
