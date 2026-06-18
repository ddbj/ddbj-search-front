import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { SraSampleListRequestParams } from "@/schema/api/entries/sraSample.ts";
import { API_PATH_SRA_SAMPLE_LIST } from "@/schema/api/paths.ts";
import type { SraSampleSearchParams } from "@/schema/search/sraSample.ts";

export const fetchSraSamples = async (params: SraSampleSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_SAMPLE_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: SraSampleSearchParams): SraSampleListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraSampleEntries = {
  parseParams,
};
