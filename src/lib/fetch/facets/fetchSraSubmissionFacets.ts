import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  SraSubmissionFacetListRequestParams,
  SraSubmissionFacetListResponse,
} from "@/schema/api/facets/sraSubmission.ts";
import { API_PATH_SRA_SUBMISSION_FACET_LIST } from "@/schema/api/paths.ts";
import type { SraSubmissionSearchParams } from "@/schema/search/sraSubmission.ts";
export const fetchSraSubmissionFacets = async (params: SraSubmissionSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_SUBMISSION_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as SraSubmissionFacetListResponse;
  return data;
};

const parseParams = (params: SraSubmissionSearchParams): SraSubmissionFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraSubmissionFacets = {
  parseParams,
};
