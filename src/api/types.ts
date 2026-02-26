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
import type { AllFacetListResponse } from "@/api/facets/all.ts";

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
