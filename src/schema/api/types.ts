import type { BioProjectDetailResponse } from "@/schema/api/detail/bioProject.ts";
import type { BioSampleDetailResponse } from "@/schema/api/detail/bioSample.ts";
import type { GeaDetailResponse } from "@/schema/api/detail/gea.ts";
import type { JgaDacDetailResponse } from "@/schema/api/detail/jgaDac.ts";
import type { JgaDatasetDetailResponse } from "@/schema/api/detail/jgaDataset.ts";
import type { JgaPolicyDetailResponse } from "@/schema/api/detail/jgaPolicy.ts";
import type { JgaStudyDetailResponse } from "@/schema/api/detail/jgaStudy.ts";
import type { MetaboBankDetailResponse } from "@/schema/api/detail/metaboBank.ts";
import type { SraAnalysisDetailResponse } from "@/schema/api/detail/sraAnalysis.ts";
import type { SraExperimentDetailResponse } from "@/schema/api/detail/sraExperiment.ts";
import type { SraRunDetailResponse } from "@/schema/api/detail/sraRun.ts";
import type { SraSampleDetailResponse } from "@/schema/api/detail/sraSample.ts";
import type { SraStudyDetailResponse } from "@/schema/api/detail/sraStudy.ts";
import type { SraSubmissionDetailResponse } from "@/schema/api/detail/sraSubmission.ts";
import type { AllFacetListRequestParams, AllFacetListResponse } from "@/schema/api/facets/all.ts";
import type {
  BioProjectFacetListRequestParams,
  BioProjectFacetListResponse,
} from "@/schema/api/facets/bioProject.ts";
import type {
  BioSampleFacetListRequestParams,
  BioSampleFacetListResponse,
} from "@/schema/api/facets/bioSample.ts";
import type { GeaFacetListRequestParams, GeaFacetListResponse } from "@/schema/api/facets/gea.ts";
import type { JgaDacFacetListRequestParams, JgaDacFacetListResponse } from "@/schema/api/facets/jgaDac.ts";
import type {
  JgaDatasetFacetListRequestParams,
  JgaDatasetFacetListResponse,
} from "@/schema/api/facets/jgaDataset.ts";
import type {
  JgaPolicyFacetListRequestParams,
  JgaPolicyFacetListResponse,
} from "@/schema/api/facets/jgaPolicy.ts";
import type {
  JgaStudyFacetListRequestParams,
  JgaStudyFacetListResponse,
} from "@/schema/api/facets/jgaStudy.ts";
import type {
  MetaboBankFacetListRequestParams,
  MetaboBankFacetListResponse,
} from "@/schema/api/facets/metaboBank.ts";
import type {
  SraAnalysisFacetListRequestParams,
  SraAnalysisFacetListResponse,
} from "@/schema/api/facets/sraAnalysis.ts";
import type {
  SraExperimentFacetListRequestParams,
  SraExperimentFacetListResponse,
} from "@/schema/api/facets/sraExperiment.ts";
import type { SraRunFacetListRequestParams, SraRunFacetListResponse } from "@/schema/api/facets/sraRun.ts";
import type {
  SraSampleFacetListRequestParams,
  SraSampleFacetListResponse,
} from "@/schema/api/facets/sraSample.ts";
import type {
  SraStudyFacetListRequestParams,
  SraStudyFacetListResponse,
} from "@/schema/api/facets/sraStudy.ts";
import type {
  SraSubmissionFacetListRequestParams,
  SraSubmissionFacetListResponse,
} from "@/schema/api/facets/sraSubmission.ts";

export type SearchDetailResponse =
  | BioProjectDetailResponse
  | BioSampleDetailResponse
  | GeaDetailResponse
  | MetaboBankDetailResponse
  | SraRunDetailResponse
  | SraExperimentDetailResponse
  | SraSampleDetailResponse
  | SraAnalysisDetailResponse
  | SraSubmissionDetailResponse
  | SraStudyDetailResponse
  | JgaDatasetDetailResponse
  | JgaStudyDetailResponse
  | JgaPolicyDetailResponse
  | JgaDacDetailResponse;

export type FacetListResponse =
  | AllFacetListResponse
  | BioProjectFacetListResponse
  | BioSampleFacetListResponse
  | GeaFacetListResponse
  | MetaboBankFacetListResponse
  | SraRunFacetListResponse
  | SraExperimentFacetListResponse
  | SraSampleFacetListResponse
  | SraAnalysisFacetListResponse
  | SraSubmissionFacetListResponse
  | SraStudyFacetListResponse
  | JgaDatasetFacetListResponse
  | JgaStudyFacetListResponse
  | JgaPolicyFacetListResponse
  | JgaDacFacetListResponse;

export type FetchFacetListParams =
  | AllFacetListRequestParams
  | BioProjectFacetListRequestParams
  | BioSampleFacetListRequestParams
  | GeaFacetListRequestParams
  | MetaboBankFacetListRequestParams
  | SraRunFacetListRequestParams
  | SraExperimentFacetListRequestParams
  | SraSampleFacetListRequestParams
  | SraAnalysisFacetListRequestParams
  | SraSubmissionFacetListRequestParams
  | SraStudyFacetListRequestParams
  | JgaDatasetFacetListRequestParams
  | JgaStudyFacetListRequestParams
  | JgaPolicyFacetListRequestParams
  | JgaDacFacetListRequestParams;
