import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { GeaListRequestParams } from "@/schema/api/entries/gea.ts";
import { API_PATH_GEA_LIST } from "@/schema/api/paths.ts";
import type { GeaSearchParams } from "@/schema/search/gea.ts";

export const fetchGeaEntries = async (params: GeaSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_GEA_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: GeaSearchParams): GeaListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchGeaEntries = {
  parseParams,
};
