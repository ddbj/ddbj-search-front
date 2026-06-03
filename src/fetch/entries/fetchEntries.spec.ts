import { describe, expect, it, vi } from "vitest";
import {
  API_PATH_ALL_ENTRIES_LIST,
  API_PATH_BIOPROJECT_LIST,
  API_PATH_BIOSAMPLE_LIST,
  API_PATH_GEA_LIST,
  API_PATH_JGA_DAC_LIST,
  API_PATH_JGA_DATASET_LIST,
  API_PATH_JGA_POLICY_LIST,
  API_PATH_JGA_STUDY_LIST,
  API_PATH_METABOBANK_LIST,
  API_PATH_SRA_ANALYSIS_LIST,
  API_PATH_SRA_EXPERIMENT_LIST,
  API_PATH_SRA_RUN_LIST,
  API_PATH_SRA_SAMPLE_LIST,
  API_PATH_SRA_STUDY_LIST,
  API_PATH_SRA_SUBMISSION_LIST,
} from "@/api/paths.ts";
import { fetchAllEntries } from "@/fetch/entries/fetchAllEntries.ts";
import { fetchBioProjects } from "@/fetch/entries/fetchBioProjectEntries.ts";
import { fetchBioSamples } from "@/fetch/entries/fetchBioSampleEntries.ts";
import { fetchGeaEntries } from "@/fetch/entries/fetchGeaEntries.ts";
import { fetchJgaDacs } from "@/fetch/entries/fetchJgaDacEntries.ts";
import { fetchJgaDatasets } from "@/fetch/entries/fetchJgaDatasetEntries.ts";
import { fetchJgaPolicies } from "@/fetch/entries/fetchJgaPolicyEntries.ts";
import { fetchJgaStudies } from "@/fetch/entries/fetchJgaStudyEntries.ts";
import { fetchMetaboBankEntries } from "@/fetch/entries/fetchMetaboBankEntries.ts";
import { fetchSraAnalyses } from "@/fetch/entries/fetchSraAnalysisEntries.ts";
import { fetchSraExperiments } from "@/fetch/entries/fetchSraExperimentEntries.ts";
import { fetchSraRuns } from "@/fetch/entries/fetchSraRunEntries.ts";
import { fetchSraSamples } from "@/fetch/entries/fetchSraSampleEntries.ts";
import { fetchSraStudies } from "@/fetch/entries/fetchSraStudyEntries.ts";
import { fetchSraSubmissions } from "@/fetch/entries/fetchSraSubmissionEntries.ts";

type Case = {
  name: string;
  basePath: string;
  fn: (params: {
    keywords: string[];
    organization: string;
    publication: string;
    grant: string;
  }) => Promise<unknown>;
  expectedQuery: string;
};

const baseExpectedQuery =
  "includeFacets=false&includeProperties=false&dbXrefsLimit=0&keywords=human&organization=NCBI";
const publicationExpectedQuery = `${baseExpectedQuery}&publication=Nature`;
const publicationAndGrantExpectedQuery = `${publicationExpectedQuery}&grant=NSF`;

const cases: Case[] = [
  {
    name: "all",
    basePath: API_PATH_ALL_ENTRIES_LIST,
    fn: fetchAllEntries,
    expectedQuery: baseExpectedQuery,
  },
  {
    name: "bioproject",
    basePath: API_PATH_BIOPROJECT_LIST,
    fn: fetchBioProjects,
    expectedQuery: publicationAndGrantExpectedQuery,
  },
  {
    name: "biosample",
    basePath: API_PATH_BIOSAMPLE_LIST,
    fn: fetchBioSamples,
    expectedQuery: baseExpectedQuery,
  },
  {
    name: "gea",
    basePath: API_PATH_GEA_LIST,
    fn: fetchGeaEntries,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "jga-dac",
    basePath: API_PATH_JGA_DAC_LIST,
    fn: fetchJgaDacs,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "jga-dataset",
    basePath: API_PATH_JGA_DATASET_LIST,
    fn: fetchJgaDatasets,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "jga-policy",
    basePath: API_PATH_JGA_POLICY_LIST,
    fn: fetchJgaPolicies,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "jga-study",
    basePath: API_PATH_JGA_STUDY_LIST,
    fn: fetchJgaStudies,
    expectedQuery: publicationAndGrantExpectedQuery,
  },
  {
    name: "metabobank",
    basePath: API_PATH_METABOBANK_LIST,
    fn: fetchMetaboBankEntries,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "sra-analysis",
    basePath: API_PATH_SRA_ANALYSIS_LIST,
    fn: fetchSraAnalyses,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "sra-experiment",
    basePath: API_PATH_SRA_EXPERIMENT_LIST,
    fn: fetchSraExperiments,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "sra-run",
    basePath: API_PATH_SRA_RUN_LIST,
    fn: fetchSraRuns,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "sra-sample",
    basePath: API_PATH_SRA_SAMPLE_LIST,
    fn: fetchSraSamples,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "sra-study",
    basePath: API_PATH_SRA_STUDY_LIST,
    fn: fetchSraStudies,
    expectedQuery: publicationExpectedQuery,
  },
  {
    name: "sra-submission",
    basePath: API_PATH_SRA_SUBMISSION_LIST,
    fn: fetchSraSubmissions,
    expectedQuery: publicationExpectedQuery,
  },
];

const searchParams = {
  keywords: ["human"],
  organization: "NCBI",
  publication: "Nature",
  grant: "NSF",
};

describe("fetch*Entries", () => {
  it.each(cases)("should call GET $basePath: $name", async ({ basePath, fn, expectedQuery }) => {
    const mockData = {
      items: [],
      pagination: {
        page: 1,
        perPage: 10,
        total: 0,
      },
    };

    const mockFetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }),
    );

    vi.stubGlobal("fetch", mockFetch);

    const result = await fn(searchParams);

    expect(mockFetch).toHaveBeenCalledWith(`${basePath}?${expectedQuery}`, { method: "GET" });
    expect(result).toEqual(mockData);

    vi.unstubAllGlobals();
  });

  it.each(cases)(
    "should throw AppHttpError for a problem response: $name",
    async ({ basePath, fn, expectedQuery }) => {
      const mockFetch = vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            title: "Internal Server Error",
            status: 500,
            detail: "dblink database is not available",
            requestId: "request-500",
          }),
          {
            status: 500,
            statusText: "Internal Server Error",
            headers: {
              "content-type": "application/problem+json",
            },
          },
        ),
      );

      vi.stubGlobal("fetch", mockFetch);

      await expect(fn(searchParams)).rejects.toMatchObject({
        name: "AppHttpError",
        status: 500,
        requestId: "request-500",
        message: "dblink database is not available",
        problem: {
          title: "Internal Server Error",
          status: 500,
        },
      });
      expect(mockFetch).toHaveBeenCalledWith(`${basePath}?${expectedQuery}`, { method: "GET" });

      vi.unstubAllGlobals();
    },
  );
});
