import type { AllFacetListRequestParams, AllFacetListResponse } from "@/api/facets/all.ts";
import { API_PATH_ALL_FACET_LIST } from "@/api/paths.ts";
import { createAppHttpError, isInvalidOrganismSearchParamError } from "@/lib/fetch/http/httpError.ts";
import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";

type FetchAllFacetsOptions = {
  facets?: string[];
};

const emptyAllFacetListResponse: AllFacetListResponse = {
  facets: {
    type: null,
    organism: null,
    accessibility: null,
  },
};

export const fetchAllFacets = async (
  params: AllSearchParams,
  options: FetchAllFacetsOptions = {},
) => {
  const searchParams = parseParams(params, options);
  const response = await fetch(`${API_PATH_ALL_FACET_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  if (!response.ok) {
    const error = await createAppHttpError(response);
    if (isInvalidOrganismSearchParamError(error)) return emptyAllFacetListResponse;
    throw error;
  }
  const data = (await response.json()) as AllFacetListResponse;
  return data;
};

const parseParams = (
  params: AllSearchParams,
  options: FetchAllFacetsOptions = {},
): AllFacetListRequestParams => {
  const result: AllFacetListRequestParams = {
    ...parseBaseFacetParams(params),
    // add all facet specific params here
  };
  if (params.types && params.types.length > 0) {
    result.types = params.types.join(",");
  }
  if (options.facets) {
    result.facets = options.facets.join(",");
  }
  return result;
};

export const __TEST__fetchAllFacets = {
  parseParams,
};
