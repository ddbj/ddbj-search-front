import { API_PATH_ALL_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { AllFacetListRequestParam, AllFacetListResponse } from "@/api/facets/all.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";

export const fetchAllFacets = async (params: AllSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_ALL_FACET_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as AllFacetListResponse;
  return data;
};

const parseParams = (params: AllSearchParams): AllFacetListRequestParam => {
  return { ...parseBaseFacetParams(params) };
};
