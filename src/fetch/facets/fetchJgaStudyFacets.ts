import { API_PATH_JGA_STUDY_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type {
  JgaStudyFacetListRequestParams,
  JgaStudyFacetListResponse,
} from "@/api/facets/jgaStudy.ts";
import type { JgaStudySearchParams } from "@/schema/search/jgaStudy.ts";
export const fetchJgaStudyFacets = async (params: JgaStudySearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_JGA_STUDY_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as JgaStudyFacetListResponse;
  return data;
};

const parseParams = (params: JgaStudySearchParams): JgaStudyFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchJgaStudyFacets = {
  parseParams,
};
