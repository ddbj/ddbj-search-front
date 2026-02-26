import { API_PATH_JGA_DATASET_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import type { JgaDatasetFacetListRequestParams } from "@/api/facets/jgaDataset.ts";
import type { JgaDatasetSearchParams } from "@/schema/search/jgaDataset.ts";

export const fetchJgaDatasetFacets = async (params: JgaDatasetSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_DATASET_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BaseFacetListResponse;
  return data;
};

const parseParams = (params: JgaDatasetSearchParams): JgaDatasetFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchJgaDatasetFacets = {
  parseParams,
};
