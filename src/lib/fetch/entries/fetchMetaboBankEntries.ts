import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { MetaboBankListRequestParams } from "@/schema/api/entries/metaboBank.ts";
import { API_PATH_METABOBANK_LIST } from "@/schema/api/paths.ts";
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
