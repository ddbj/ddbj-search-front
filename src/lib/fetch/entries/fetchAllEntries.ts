import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { AllEntryListRequestParams } from "@/schema/api/entries/all.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import { API_PATH_ALL_ENTRIES_LIST } from "@/schema/api/paths.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";

export const fetchAllEntries = async (params: AllSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_ALL_ENTRIES_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: AllSearchParams): AllEntryListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.types && params.types.length ? { types: params.types.join(",") } : {}),
  };
};

export const __TEST__fetchSearchALL = {
  parseParams,
};
