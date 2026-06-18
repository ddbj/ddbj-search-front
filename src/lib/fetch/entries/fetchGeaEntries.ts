import type { EntryListResponse } from "@/api/entries/base.ts";
import type { GeaListRequestParams } from "@/api/entries/gea.ts";
import { API_PATH_GEA_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
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
