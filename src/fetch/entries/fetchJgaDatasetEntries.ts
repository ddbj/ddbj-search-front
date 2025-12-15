import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaDatasetListRequestParams } from "@/api/entries/jgaDataset.ts";
import type { JgaDatasetSearchParams } from "@/schema/search/jgaDataset.ts";

export const fetchJgaDatasets = async (params: JgaDatasetSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_DATASET_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: JgaDatasetSearchParams): JgaDatasetListRequestParams => {
  return {
    ...parseBaseParams(params),
    // Add JGA Dataset-specific parameters here if needed
  };
};

export const __TEST__fetchJgaDatasetEntries = {
  parseParams,
};
