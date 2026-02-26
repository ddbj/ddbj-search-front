import { API_PATH_BIOPROJECT_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type {
  BioProjectFacetListRequestParams,
  BioProjectFacetListResponse,
} from "@/api/facets/bioProject.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";

export const fetchBioProjectFacets = async (params: BioprojectSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_BIOPROJECT_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BioProjectFacetListResponse;
  return data;
};

const parseParams = (params: BioprojectSearchParams): BioProjectFacetListRequestParams => {
  const result: BioProjectFacetListRequestParams = parseBaseFacetParams(params);
  if (params.organization) {
    result.organization = params.organization;
  }
  if (params.publication) {
    result.publication = params.publication;
  }
  if (params.grant) {
    result.grant = params.grant;
  }
  if (params.umbrella !== undefined) {
    result.umbrella = params.umbrella ? "true" : "false";
  }
  return result;
};

export const __TEST__fetchBioProjectFacets = {
  parseParams,
};
