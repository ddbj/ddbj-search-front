import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraSampleListRequestParams } from "@/api/entries/sraSample.ts";
import type { SraSampleSearchParams } from "@/schema/search/sraSample.ts";

export const fetchSraSamples = async (params: SraSampleSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_SAMPLE_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: SraSampleSearchParams): SraSampleListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    // Add SRA Sample-specific parameters here if needed
  };
};

export const __TEST__fetchSraSampleEntries = {
  parseParams,
};
