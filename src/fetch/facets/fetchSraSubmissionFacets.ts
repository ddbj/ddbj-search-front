import { API_PATH_SRA_SUBMISSION_FACET_LIST } from "@/api/paths.ts";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type {
  SraSubmissionFacetListRequestParams,
  SraSubmissionFacetListResponse,
} from "@/api/facets/sraSubmission.ts";
import type { SraSubmissionSearchParams } from "@/schema/search/sraSubmission.ts";
export const fetchSraSubmissionFacets = async (params: SraSubmissionSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_SUBMISSION_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as SraSubmissionFacetListResponse;
  return data;
};

const parseParams = (params: SraSubmissionSearchParams): SraSubmissionFacetListRequestParams => {
  return parseBaseFacetParams(params);
};

export const __TEST__fetchSraSubmissionFacets = {
  parseParams,
};
