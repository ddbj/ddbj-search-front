import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type {
  SraRunFacetListRequestParams,
  SraRunFacetListResponse,
} from "@/schema/api/facets/sraRun.ts";
import { API_PATH_SRA_RUN_FACET_LIST } from "@/schema/api/paths.ts";
import type { SraRunSearchParams } from "@/schema/search/sraRun.ts";
export const fetchSraRunFacets = async (params: SraRunSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(
    `${API_PATH_SRA_RUN_FACET_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  const data = (await response.json()) as SraRunFacetListResponse;
  return data;
};

const parseParams = (params: SraRunSearchParams): SraRunFacetListRequestParams => {
  return {
    ...parseBaseFacetParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraRunFacets = {
  parseParams,
};
