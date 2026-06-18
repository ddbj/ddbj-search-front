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
import { fetchAllEntries } from "@/lib/fetch/entries/fetchAllEntries.ts";
import { fetchBioProjects } from "@/lib/fetch/entries/fetchBioProjectEntries.ts";
import { fetchBioSamples } from "@/lib/fetch/entries/fetchBioSampleEntries.ts";
import { fetchGeaEntries } from "@/lib/fetch/entries/fetchGeaEntries.ts";
import { fetchJgaDacs } from "@/lib/fetch/entries/fetchJgaDacEntries.ts";
import { fetchJgaDatasets } from "@/lib/fetch/entries/fetchJgaDatasetEntries.ts";
import { fetchJgaPolicies } from "@/lib/fetch/entries/fetchJgaPolicyEntries.ts";
import { fetchJgaStudies } from "@/lib/fetch/entries/fetchJgaStudyEntries.ts";
import { fetchMetaboBankEntries } from "@/lib/fetch/entries/fetchMetaboBankEntries.ts";
import { fetchSraAnalyses } from "@/lib/fetch/entries/fetchSraAnalysisEntries.ts";
import { fetchSraExperiments } from "@/lib/fetch/entries/fetchSraExperimentEntries.ts";
import { fetchSraRuns } from "@/lib/fetch/entries/fetchSraRunEntries.ts";
import { fetchSraSamples } from "@/lib/fetch/entries/fetchSraSampleEntries.ts";
import { fetchSraStudies } from "@/lib/fetch/entries/fetchSraStudyEntries.ts";
import { fetchSraSubmissions } from "@/lib/fetch/entries/fetchSraSubmissionEntries.ts";

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

  it("does not include unsupported publication or grant in BioSample entry requests", async () => {
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

    await fetchBioSamples({
      keywords: ["human"],
      organization: "NCBI",
      publication: "Nature",
      grant: "AMED",
    });

    expect(mockFetch).toHaveBeenCalledWith(`${API_PATH_BIOSAMPLE_LIST}?${baseExpectedQuery}`, {
      method: "GET",
    });
    expect(mockFetch.mock.calls[0][0]).not.toContain("publication=Nature");
    expect(mockFetch.mock.calls[0][0]).not.toContain("grant=AMED");

    vi.unstubAllGlobals();
  });
});
