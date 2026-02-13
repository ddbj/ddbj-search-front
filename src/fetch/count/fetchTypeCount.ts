import { API_PATH_ALL_FACET_LIST, API_PATH_TYPE_COUNT } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { CountTypesRequestParams, CountTypesResponse } from "@/api/count/types.ts";
import type { AllFacetListRequestParam } from "@/api/facets/all.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";

export const fetchTypeCount = async (params: BaseSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_ALL_FACET_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as CountTypesResponse;
  return data;
};

const parseParams = (params: AllSearchParams): AllFacetListRequestParam => {
  const base = parseBaseParams(params);
  const {
    page: _page,
    perPage: _perPage,
    includeFacets: _includeFacets,
    includeProperties: _includeProperties,
    dbXrefsLimit: _dbXrefsLimit,
    ...rest
  } = base;
  return rest;
};

export const __TEST__fetchTypeCount = {
  parseParams,
};
