import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { SraExperimentDetailResponse } from "@/api/detail/sraExperiment.ts";

const path = addIdentifierToPath(API_PATH_SRA_EXPERIMENT_LIST, "MSW");

export const getSraExperimentDetail = http.get<
  BaseDetailRequestParams,
  never,
  SraExperimentDetailResponse
>(path, ({ params }) => {
  const { identifier } = params;

  return HttpResponse.json<SraExperimentDetailResponse>({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW SRA Experiment Title",
    organism: null,
    description: "This is a mock SRA experiment detail for testing purposes.",
    type: "sra-experiment",
    visibility: "Unrestricted",
    status: "public",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    downloadUrl: null,
  });
});
