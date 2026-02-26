import { type DBType, dbTypes } from "@/consts/db.ts";
import { fetchAllFacets } from "@/fetch/facets/fetchAllFacets.ts";
import { fetchBioProjectFacets } from "@/fetch/facets/fetchBioProjectFacets.ts";
import { fetchBioSampleFacets } from "@/fetch/facets/fetchBioSampleFacets.ts";
import { fetchJgaDacFacets } from "@/fetch/facets/fetchJgaDacFacets.ts";
import { fetchJgaDatasetFacets } from "@/fetch/facets/fetchJgaDatasetFacets.ts";
import { fetchJgaPolicyFacets } from "@/fetch/facets/fetchJgaPolicyFacets.ts";
import { fetchJgaStudyFacets } from "@/fetch/facets/fetchJgaStudyFacets.ts";
import { fetchSraAnalysisFacets } from "@/fetch/facets/fetchSraAnalysisFacets.ts";
import { fetchSraExperimentFacets } from "@/fetch/facets/fetchSraExperimentFacets.ts";
import { fetchSraRunFacets } from "@/fetch/facets/fetchSraRunFacets.ts";
import { fetchSraSampleFacets } from "@/fetch/facets/fetchSraSampleFacets.ts";
import { fetchSraStudyFacets } from "@/fetch/facets/fetchSraStudyFacets.ts";
import { fetchSraSubmissionFacets } from "@/fetch/facets/fetchSraSubmissionFacets.ts";
import type { FacetListResponse } from "@/api/types.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";
import type { BiosampleSearchParams } from "@/schema/search/bioSample.ts";
import type { JgaDacSearchParams } from "@/schema/search/jgaDac.ts";
import type { JgaDatasetSearchParams } from "@/schema/search/jgaDataset.ts";
import type { JgaPolicySearchParams } from "@/schema/search/jgaPolicy.ts";
import type { JgaStudySearchParams } from "@/schema/search/jgaStudy.ts";
import type { SraAnalysisSearchParams } from "@/schema/search/sraAnalysis.ts";
import type { SraExperimentSearchParams } from "@/schema/search/sraExperiment.ts";
import type { SraRunSearchParams } from "@/schema/search/sraRun.ts";
import type { SraSampleSearchParams } from "@/schema/search/sraSample.ts";
import type { SraStudySearchParams } from "@/schema/search/sraStudy.ts";
import type { SraSubmissionSearchParams } from "@/schema/search/sraSubmission.ts";

export const fetchFacets = async (
  dbType: DBType | null,
  params: AnySearchParams
): Promise<FacetListResponse> => {
  switch (dbType) {
    case dbTypes.bioproject:
      return fetchBioProjectFacets(params as BioprojectSearchParams);
    case dbTypes.biosample:
      return fetchBioSampleFacets(params as BiosampleSearchParams);
    case dbTypes["sra-run"]:
      return fetchSraRunFacets(params as SraRunSearchParams);
    case dbTypes["sra-experiment"]:
      return fetchSraExperimentFacets(params as SraExperimentSearchParams);
    case dbTypes["sra-sample"]:
      return fetchSraSampleFacets(params as SraSampleSearchParams);
    case dbTypes["sra-analysis"]:
      return fetchSraAnalysisFacets(params as SraAnalysisSearchParams);
    case dbTypes["sra-submission"]:
      return fetchSraSubmissionFacets(params as SraSubmissionSearchParams);
    case dbTypes["sra-study"]:
      return fetchSraStudyFacets(params as SraStudySearchParams);
    case dbTypes["jga-dataset"]:
      return fetchJgaDatasetFacets(params as JgaDatasetSearchParams);
    case dbTypes["jga-study"]:
      return fetchJgaStudyFacets(params as JgaStudySearchParams);
    case dbTypes["jga-policy"]:
      return fetchJgaPolicyFacets(params as JgaPolicySearchParams);
    case dbTypes["jga-dac"]:
      return fetchJgaDacFacets(params as JgaDacSearchParams);
    default:
      return fetchAllFacets(params as AllSearchParams);
  }
};
