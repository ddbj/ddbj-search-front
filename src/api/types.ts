import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";
import type { BioSampleDetailResponse } from "@/api/detail/bioSample.ts";
import type { JgaDacDetailResponse } from "@/api/detail/jgaDac.ts";
import type { JgaDatasetDetailResponse } from "@/api/detail/jgaDataset.ts";
import type { JgaPolicyDetailResponse } from "@/api/detail/jgaPolicy.ts";
import type { JgaStudyDetailResponse } from "@/api/detail/jgaStudy.ts";
import type { SraAnalysisDetailResponse } from "@/api/detail/sraAnalysis.ts";
import type { SraExperimentDetailResponse } from "@/api/detail/sraExperiment.ts";
import type { SraRunDetailResponse } from "@/api/detail/sraRun.ts";
import type { SraSampleDetailResponse } from "@/api/detail/sraSample.ts";
import type { SraStudyDetailResponse } from "@/api/detail/sraStudy.ts";
import type { SraSubmissionDetailResponse } from "@/api/detail/sraSubmission.ts";
import type { AllFacetListRequestParams, AllFacetListResponse } from "@/api/facets/all.ts";
import type {
  BioProjectFacetListRequestParams,
  BioProjectFacetListResponse,
} from "@/api/facets/bioProject.ts";
import type {
  BioSampleFacetListRequestParams,
  BioSampleFacetListResponse,
} from "@/api/facets/bioSample.ts";
import type { JgaDacFacetListRequestParams, JgaDacFacetListResponse } from "@/api/facets/jgaDac.ts";
import type {
  JgaDatasetFacetListRequestParams,
  JgaDatasetFacetListResponse,
} from "@/api/facets/jgaDataset.ts";
import type {
  JgaPolicyFacetListRequestParams,
  JgaPolicyFacetListResponse,
} from "@/api/facets/jgaPolicy.ts";
import type {
  JgaStudyFacetListRequestParams,
  JgaStudyFacetListResponse,
} from "@/api/facets/jgaStudy.ts";
import type {
  SraAnalysisFacetListRequestParams,
  SraAnalysisFacetListResponse,
} from "@/api/facets/sraAnalysis.ts";
import type {
  SraExperimentFacetListRequestParams,
  SraExperimentFacetListResponse,
} from "@/api/facets/sraExperiment.ts";
import type { SraRunFacetListRequestParams, SraRunFacetListResponse } from "@/api/facets/sraRun.ts";
import type {
  SraSampleFacetListRequestParams,
  SraSampleFacetListResponse,
} from "@/api/facets/sraSample.ts";
import type {
  SraStudyFacetListRequestParams,
  SraStudyFacetListResponse,
} from "@/api/facets/sraStudy.ts";
import type {
  SraSubmissionFacetListRequestParams,
  SraSubmissionFacetListResponse,
} from "@/api/facets/sraSubmission.ts";

export type SearchDetailResponse =
  | BioProjectDetailResponse
  | BioSampleDetailResponse
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
