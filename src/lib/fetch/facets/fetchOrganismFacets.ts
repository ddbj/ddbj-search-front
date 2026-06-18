import { dbTypes, type DBType } from "@/consts/db.ts";
import { fetchAllFacets } from "@/lib/fetch/facets/fetchAllFacets.ts";
import { fetchBioProjectFacets } from "@/lib/fetch/facets/fetchBioProjectFacets.ts";
import { parseBaseFacetParams } from "@/lib/fetch/facets/parseBaseFacetParams.ts";
import type { BaseFacetListResponse, FacetItem } from "@/schema/api/facets/base.ts";
import {
  API_PATH_BIOSAMPLE_FACET_LIST,
  API_PATH_GEA_FACET_LIST,
  API_PATH_JGA_DAC_FACET_LIST,
  API_PATH_JGA_DATASET_FACET_LIST,
  API_PATH_JGA_POLICY_FACET_LIST,
  API_PATH_JGA_STUDY_FACET_LIST,
  API_PATH_METABOBANK_FACET_LIST,
  API_PATH_SRA_ANALYSIS_FACET_LIST,
  API_PATH_SRA_EXPERIMENT_FACET_LIST,
  API_PATH_SRA_RUN_FACET_LIST,
  API_PATH_SRA_SAMPLE_FACET_LIST,
  API_PATH_SRA_STUDY_FACET_LIST,
  API_PATH_SRA_SUBMISSION_FACET_LIST,
} from "@/schema/api/paths.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";

const organismFacetOptions = { facets: ["organism"] };

const organismFacetPathByType: Record<Exclude<DBType, "bioproject">, string> = {
  [dbTypes.biosample]: API_PATH_BIOSAMPLE_FACET_LIST,
  [dbTypes.gea]: API_PATH_GEA_FACET_LIST,
  [dbTypes.metabobank]: API_PATH_METABOBANK_FACET_LIST,
  [dbTypes["sra-run"]]: API_PATH_SRA_RUN_FACET_LIST,
  [dbTypes["sra-experiment"]]: API_PATH_SRA_EXPERIMENT_FACET_LIST,
  [dbTypes["sra-sample"]]: API_PATH_SRA_SAMPLE_FACET_LIST,
  [dbTypes["sra-analysis"]]: API_PATH_SRA_ANALYSIS_FACET_LIST,
  [dbTypes["sra-submission"]]: API_PATH_SRA_SUBMISSION_FACET_LIST,
  [dbTypes["sra-study"]]: API_PATH_SRA_STUDY_FACET_LIST,
  [dbTypes["jga-dataset"]]: API_PATH_JGA_DATASET_FACET_LIST,
  [dbTypes["jga-study"]]: API_PATH_JGA_STUDY_FACET_LIST,
  [dbTypes["jga-policy"]]: API_PATH_JGA_POLICY_FACET_LIST,
  [dbTypes["jga-dac"]]: API_PATH_JGA_DAC_FACET_LIST,
};

export const fetchOrganismFacets = async (
  currentType: DBType | null,
  params: AnySearchParams,
): Promise<FacetItem[]> => {
  const facetParams = makeOrganismFacetParams(params);

  if (!currentType) {
    const data = await fetchAllFacets(facetParams as AllSearchParams, organismFacetOptions);
    return data.facets.organism ?? [];
  }

  if (currentType === dbTypes.bioproject) {
    const data = await fetchBioProjectFacets(
      facetParams as BioprojectSearchParams,
      organismFacetOptions,
    );
    return data.facets.organism ?? [];
  }

  return fetchBaseOrganismFacets(organismFacetPathByType[currentType], currentType, facetParams);
};

export const makeOrganismFacetParams = (params: AnySearchParams): AnySearchParams => {
  const { organism: _organism, page: _page, perPage: _perPage, ...facetParams } = params;
  return facetParams;
};

export const makeOrganismFacetQueryKey = (currentType: DBType | null, params: AnySearchParams) => [
  "fetchOrganismFacets",
  currentType ?? "all",
  ...Object.entries(makeOrganismFacetParams(params)),
];

const fetchBaseOrganismFacets = async (
  path: string,
  currentType: Exclude<DBType, "bioproject">,
  params: AnySearchParams,
): Promise<FacetItem[]> => {
  const searchParams = parseBaseOrganismFacetParams(currentType, params);
  const response = await fetch(`${path}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as BaseFacetListResponse;
  return data.facets.organism ?? [];
};

const supportsPublication = (currentType: Exclude<DBType, "bioproject">) =>
  currentType !== dbTypes.biosample;

const supportsGrant = (currentType: Exclude<DBType, "bioproject">) =>
  currentType === dbTypes["jga-study"];

const parseBaseOrganismFacetParams = (
  currentType: Exclude<DBType, "bioproject"> | null,
  params: AnySearchParams,
): Record<string, string> => {
  const facetParams = makeOrganismFacetParams(params);
  return {
    ...parseBaseFacetParams(facetParams),
    ...(currentType && supportsPublication(currentType) && facetParams.publication
      ? { publication: facetParams.publication }
      : {}),
    ...(currentType && supportsGrant(currentType) && facetParams.grant
      ? { grant: facetParams.grant }
      : {}),
    facets: "organism",
  };
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with organism facet routing logic.
export const __TEST__fetchOrganismFacets = {
  makeOrganismFacetParams,
  makeOrganismFacetQueryKey,
  parseBaseOrganismFacetParams,
};
