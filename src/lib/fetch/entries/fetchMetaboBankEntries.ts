import type { EntryListResponse } from "@/api/entries/base.ts";
import type { MetaboBankListRequestParams } from "@/api/entries/metaboBank.ts";
import { API_PATH_METABOBANK_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import type { MetaboBankSearchParams } from "@/schema/search/metaboBank.ts";

export const fetchMetaboBankEntries = async (params: MetaboBankSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_METABOBANK_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: MetaboBankSearchParams): MetaboBankListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchMetaboBankEntries = {
  parseParams,
};
