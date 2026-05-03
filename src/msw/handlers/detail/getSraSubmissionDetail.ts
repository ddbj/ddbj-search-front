import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_SRA_SUBMISSION_LIST, "MSW");

export const getSraSubmissionDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_SRA_SUBMISSION_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW SRA Submission Title",
    organism: null,
    description: "This is a mock SRA Submission detail for testing purposes.",
    type: "sra-submission",
    accessibility: "public-access",
    status: "live",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    distribution: [],
    isPartOf: "SRA Submission",
    name: null,
    url: `https://ddbj-staging.nig.ac.jp/search/entry/sra-submission/${identifier}`,
    sameAs: [],
  });
});
