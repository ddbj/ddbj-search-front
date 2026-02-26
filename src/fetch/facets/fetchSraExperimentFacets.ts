import { API_PATH_SRA_EXPERIMENT_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { BaseFacetListResponse } from "@/api/facets/base.ts";
import type { SraExperimentFacetListRequestParams } from "@/api/facets/sraExperiment.ts";
import type { SraExperimentSearchParams } from "@/schema/search/sraExperiment.ts";

export const fetchSraExperimentFacets = async (params: SraExperimentSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_EXPERIMENT_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as BaseFacetListResponse;
  return data;
};

const parseParams = (params: SraExperimentSearchParams): SraExperimentFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchSraExperimentFacets = {
  parseParams,
};
