import { API_PATH_ALL_ENTRIES_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { AllEntryListRequestParams } from "@/api/entries/all.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";

export const fetchAllEntries = async (params: AllSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_ALL_ENTRIES_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: AllSearchParams): AllEntryListRequestParams => {
  return {
    ...parseBaseParams(params),
    ...(params.types && params.types.length ? { types: params.types.join(",") } : {}),
  };
};

export const __TEST__fetchSearchALL = {
  parseParams,
};
