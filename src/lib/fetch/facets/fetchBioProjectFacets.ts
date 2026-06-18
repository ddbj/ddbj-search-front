import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import {
  createAppHttpError,
  isInvalidOrganismSearchParamError,
} from "@/lib/fetch/http/httpError.ts";
import type {
  BioProjectFacetListRequestParams,
  BioProjectFacetListResponse,
} from "@/schema/api/facets/bioProject.ts";
import { API_PATH_BIOPROJECT_FACET_LIST } from "@/schema/api/paths.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";

const BIOPROJECT_FACETS = "organism,accessibility,objectType";

type FetchBioProjectFacetsOptions = {
  facets?: string[];
};

const emptyBioProjectFacetListResponse: BioProjectFacetListResponse = {
  facets: {
    type: null,
    organism: null,
    accessibility: null,
    objectType: null,
  },
};

export const fetchBioProjectFacets = async (
  params: BioprojectSearchParams,
  options: FetchBioProjectFacetsOptions = {},
) => {
  const searchParams = parseParams(params, options) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_BIOPROJECT_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  if (!response.ok) {
    const error = await createAppHttpError(response);
    if (isInvalidOrganismSearchParamError(error)) return emptyBioProjectFacetListResponse;
    throw error;
  }
  const data = (await response.json()) as BioProjectFacetListResponse;
  return data;
};

const parseParams = (
  params: BioprojectSearchParams,
  options: FetchBioProjectFacetsOptions = {},
): BioProjectFacetListRequestParams => {
  const result: BioProjectFacetListRequestParams = {
    ...parseBaseFacetParams(params),
    facets: options.facets?.join(",") ?? BIOPROJECT_FACETS,
  };
  if (params.publication) {
    result.publication = params.publication;
  }
  if (params.grant) {
    result.grant = params.grant;
  }
  if (params.objectTypes && params.objectTypes.length) {
    result.objectTypes = params.objectTypes.join(",");
  }
  return result;
};

export const __TEST__fetchBioProjectFacets = {
  parseParams,
};
