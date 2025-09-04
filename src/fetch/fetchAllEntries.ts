import { API_PATH_SEARCH_ALL } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { AllEntriesParams, EntriesResponse } from "@/api/searchResult/entries.ts";
import type { AllSearchParams } from "@/schema/search.ts";

export const fetchAllEntries = async (params: AllSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SEARCH_ALL}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntriesResponse;
  return data;
};

const parseParams = (params: AllSearchParams): AllEntriesParams => {
  return {
    ...parseBaseParams(params),
    ...(params.types && params.types.length ? { types: params.types.join(",") } : {}),
  };
};

export const __TEST__fetchSearchALL = {
  parseParams,
};
