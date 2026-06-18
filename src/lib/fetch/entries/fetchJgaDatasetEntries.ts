import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { JgaDatasetListRequestParams } from "@/schema/api/entries/jgaDataset.ts";
import { API_PATH_JGA_DATASET_LIST } from "@/schema/api/paths.ts";
import type { JgaDatasetSearchParams } from "@/schema/search/jgaDataset.ts";

export const fetchJgaDatasets = async (params: JgaDatasetSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_JGA_DATASET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: JgaDatasetSearchParams): JgaDatasetListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchJgaDatasetEntries = {
  parseParams,
};
