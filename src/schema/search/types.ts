import type { AllSearchParams } from "@/schema/search/all.ts";
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

export type SearchParams =
  | AllSearchParams
  | BioprojectSearchParams
  | BiosampleSearchParams
  | SraRunSearchParams
  | SraExperimentSearchParams
  | SraSampleSearchParams
  | SraAnalysisSearchParams
  | SraSubmissionSearchParams
  | SraStudySearchParams
  | JgaDatasetSearchParams
  | JgaStudySearchParams
  | JgaPolicySearchParams
  | JgaDacSearchParams;
