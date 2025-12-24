import { describe, expect, it, vi } from "vitest";
import {
  API_PATH_BIOPROJECT_LIST,
  API_PATH_BIOSAMPLE_LIST,
  API_PATH_JGA_DAC_LIST,
  API_PATH_JGA_DATASET_LIST,
  API_PATH_JGA_POLICY_LIST,
  API_PATH_JGA_STUDY_LIST,
  API_PATH_SRA_ANALYSIS_LIST,
  API_PATH_SRA_EXPERIMENT_LIST,
  API_PATH_SRA_RUN_LIST,
  API_PATH_SRA_SAMPLE_LIST,
  API_PATH_SRA_STUDY_LIST,
  API_PATH_SRA_SUBMISSION_LIST,
} from "@/api/paths.ts";
import { fetchBioProjectDetail } from "@/fetch/detail/fetchBioProjectDetail.ts";
import { fetchBioSampleDetail } from "@/fetch/detail/fetchBioSampleDetail.ts";
import { fetchJgaDacDetail } from "@/fetch/detail/fetchJgaDacDetail.ts";
import { fetchJgaDatasetDetail } from "@/fetch/detail/fetchJgaDatasetDetail.ts";
import { fetchJgaPolicyDetail } from "@/fetch/detail/fetchJgaPolicyDetail.ts";
import { fetchJgaStudyDetail } from "@/fetch/detail/fetchJgaStudyDetail.ts";
import { fetchSraAnalysisDetail } from "@/fetch/detail/fetchSraAnalysisDetail.ts";
import { fetchSraExperimentDetail } from "@/fetch/detail/fetchSraExperimentDetail.ts";
import { fetchSraRunDetail } from "@/fetch/detail/fetchSraRunDetail.ts";
import { fetchSraSampleDetail } from "@/fetch/detail/fetchSraSampleDetail.ts";
import { fetchSraStudyDetail } from "@/fetch/detail/fetchSraStudyDetail.ts";
import { fetchSraSubmissionDetail } from "@/fetch/detail/fetchSraSubmissionDetail.ts";

type Case = {
  name: string;
  basePath: string;
  fn: (identifier: string) => Promise<unknown>;
};

const cases: Case[] = [
  {
    name: "bioproject",
    basePath: API_PATH_BIOPROJECT_LIST,
    fn: fetchBioProjectDetail,
  },
  {
    name: "biosample",
    basePath: API_PATH_BIOSAMPLE_LIST,
    fn: fetchBioSampleDetail,
  },
  {
    name: "jga-dac",
    basePath: API_PATH_JGA_DAC_LIST,
    fn: fetchJgaDacDetail,
  },
  {
    name: "jga-dataset",
    basePath: API_PATH_JGA_DATASET_LIST,
    fn: fetchJgaDatasetDetail,
  },
  {
    name: "jga-policy",
    basePath: API_PATH_JGA_POLICY_LIST,
    fn: fetchJgaPolicyDetail,
  },
  {
    name: "jga-study",
    basePath: API_PATH_JGA_STUDY_LIST,
    fn: fetchJgaStudyDetail,
  },
  {
    name: "sra-analysis",
    basePath: API_PATH_SRA_ANALYSIS_LIST,
    fn: fetchSraAnalysisDetail,
  },
  {
    name: "sra-experiment",
    basePath: API_PATH_SRA_EXPERIMENT_LIST,
    fn: fetchSraExperimentDetail,
  },
  {
    name: "sra-run",
    basePath: API_PATH_SRA_RUN_LIST,
    fn: fetchSraRunDetail,
  },
  {
    name: "sra-sample",
    basePath: API_PATH_SRA_SAMPLE_LIST,
    fn: fetchSraSampleDetail,
  },
  {
    name: "sra-study",
    basePath: API_PATH_SRA_STUDY_LIST,
    fn: fetchSraStudyDetail,
  },
  {
    name: "sra-submission",
    basePath: API_PATH_SRA_SUBMISSION_LIST,
    fn: fetchSraSubmissionDetail,
  },
];

describe("fetch*Detail", () => {
  it.each(cases)("should call GET $basePath: $name", async ({ basePath, fn }) => {
    const identifier = "TEST000001";
    const mockData = { identifier };

    const mockFetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    vi.stubGlobal("fetch", mockFetch);

    const result = await fn(identifier);

    expect(mockFetch).toHaveBeenCalledWith(`${basePath}${identifier}`, { method: "GET" });
    expect(result).toEqual(mockData);

    vi.unstubAllGlobals();
  });
});
