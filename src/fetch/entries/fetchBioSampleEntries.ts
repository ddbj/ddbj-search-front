import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { BiosampleListRequestParams } from "@/api/entries/bioSample.ts";
import type { BiosampleSearchParams } from "@/schema/search/bioSample.ts";

export const fetchBioSamples = async (params: BiosampleSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_BIOSAMPLE_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: BiosampleSearchParams): BiosampleListRequestParams => {
  return {
    ...parseBaseParams(params),
    // Add BioSample-specific parameters here if needed
  };
};

export const __TEST__fetchBioSampleEntries = {
  parseParams,
};
