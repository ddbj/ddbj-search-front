import type { EntriesApiResponse } from "@/schema/api/entries.ts";

export const API_PATH_SEARCH_ALL = "/search/api/entries/";
export const API_PATH_BIOPROJECTS = "/search/api/entries/bioproject/";
export const API_PATH_BIOSAMPLES = "/search/api/entries/biosample/";

export const dummyResponse: EntriesApiResponse = {
  page: 1,
  perPage: 10,
  total: 0,
  items: [],
};
