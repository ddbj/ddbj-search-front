import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { SraSubmissionDetailResponse } from "@/api/detail/sraSubmission.ts";

const path = addIdentifierToPath(API_PATH_SRA_SUBMISSION_LIST, "MSW");

export const getSraSubmissionDetail = http.get<
  BaseDetailRequestParams,
  never,
  SraSubmissionDetailResponse
>(path, ({ params }) => {
  const { identifier } = params;

  return HttpResponse.json<SraSubmissionDetailResponse>({
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
