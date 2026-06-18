import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  JgaDatasetFacetListRequestParams,
  JgaDatasetFacetListResponse,
} from "@/schema/api/facets/jgaDataset.ts";
import { API_PATH_JGA_DATASET_FACET_LIST } from "@/schema/api/paths.ts";
import type { JgaDatasetSearchParams } from "@/schema/search/jgaDataset.ts";
export const fetchJgaDatasetFacets = async (params: JgaDatasetSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_DATASET_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as JgaDatasetFacetListResponse;
  return data;
};

const parseParams = (params: JgaDatasetSearchParams): JgaDatasetFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchJgaDatasetFacets = {
  parseParams,
};
