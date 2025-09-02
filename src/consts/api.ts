import type { EntriesApiResponse } from "@/schema/api/entries.ts";

export const API_PATH_SEARCH_ALL = "/search/api/entries/";
export const API_PATH_BIOPROJECTS = "/search/api/bioprojects/";

export const dummyResponse: EntriesApiResponse = {
  page: 1,
  perPage: 10,
  total: 0,
  items: [],
};
