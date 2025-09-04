import { API_PATH_BIOPROJECTS, API_PATH_SEARCH_ALL } from "@/api/paths.ts";
import type { AnyEntriesApiParams } from "@/schema/api/entries.ts";
import type { AllSearchParams, AnySearchParams, BioprojectSearchParams } from "@/schema/search.ts";
import type { EntriesResponse } from "@/api/searchResult/entries.ts";

export const fetchSearchAll = async (params: AllSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SEARCH_ALL}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntriesResponse;
  return data;
};
export const fetchBioProjects = async (params: BioprojectSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_BIOPROJECTS}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntriesResponse;
  return data;
};

//TODO: better/strict implementation
const parseParams = (params: AnySearchParams): AnyEntriesApiParams => {
  return {
    ...(params.page && params.page > 0 ? { page: params.page.toFixed().toString() } : {}),
    ...(params.perPage && params.perPage > 0
      ? { perPage: params.perPage.toFixed().toString() }
      : {}),
    ...(params.types && params.types.length ? { types: params.types.join(",") } : {}),
    ...(params.keywords && params.keywords.length ? { keywords: params.keywords.join(",") } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    ...(params.dateUpdated ? { dateUpdated: params.dateUpdated } : {}),
    ...(params.organization ? { organization: params.organization } : {}),
    ...(params.publication ? { publication: params.publication } : {}),
    ...(params.grant ? { grant: params.grant } : {}),
    ...(params.umbrella !== undefined ? { umbrella: params.umbrella ? "TRUE" : "FALSE" } : {}),
  };
};

export const __TEST__fetchSearchALL = {
  parseParams,
};
