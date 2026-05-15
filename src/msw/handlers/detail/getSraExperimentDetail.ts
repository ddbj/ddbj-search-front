import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_SRA_EXPERIMENT_LIST, "MSW");

export const getSraExperimentDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_SRA_EXPERIMENT_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW SRA Experiment Title",
    organism: null,
    description: "This is a mock SRA experiment detail for testing purposes.",
    publication: [],
    grant: [],
    type: "sra-experiment",
    accessibility: "public-access",
    status: "public",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    distribution: [],
    isPartOf: "SRA Experiment",
    name: null,
    url: `https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/${identifier}`,
    sameAs: [],
    organization: null,
  });
});
