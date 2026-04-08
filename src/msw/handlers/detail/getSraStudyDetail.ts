import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";

const path = addIdentifierToPath(API_PATH_SRA_STUDY_LIST, "MSW");

export const getSraStudyDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_SRA_STUDY_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW SRA Study Title",
    organism: null,
    description: "This is a mock SRA Study detail for testing purposes.",
    type: "sra-study",
    accessibility: "public-access",
    status: "live",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    distribution: [],
    isPartOf: "SRA Study",
    name: null,
    url: `https://ddbj-staging.nig.ac.jp/search/entry/sra-study/${identifier}`,
    sameAs: [],
  });
});
