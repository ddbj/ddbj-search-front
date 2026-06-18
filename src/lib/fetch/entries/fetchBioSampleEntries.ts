import type { EntryListResponse } from "@/api/entries/base.ts";
import type { BiosampleListRequestParams } from "@/api/entries/bioSample.ts";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import type { BiosampleSearchParams } from "@/schema/search/bioSample.ts";

export const fetchBioSamples = async (params: BiosampleSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_BIOSAMPLE_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: BiosampleSearchParams): BiosampleListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    // Add BioSample-specific parameters here if needed
  };
};

export const __TEST__fetchBioSampleEntries = {
  parseParams,
};
