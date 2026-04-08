import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";

const path = addIdentifierToPath(API_PATH_JGA_DATASET_LIST, "MSW");

export const getJgaDatasetDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_JGA_DATASET_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW JGA Dataset Title",
    organism: null,
    description: "This is a mock JGA dataset detail for testing purposes.",
    type: "jga-dataset",
    accessibility: "public-access",
    status: "live",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    distribution: [],
    isPartOf: "JGA Dataset",
    name: null,
    url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-dataset/${identifier}`,
    sameAs: [],
  });
});
