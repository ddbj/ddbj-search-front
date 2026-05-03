import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_JGA_POLICY_LIST, "MSW");

export const getJgaPolicyDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_JGA_POLICY_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW JGA Policy Title",
    organism: null,
    description: "This is a mock JGA policy detail for testing purposes.",
    type: "jga-policy",
    accessibility: "public-access",
    status: "public",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    distribution: [],
    isPartOf: "JGA Policy",
    name: null,
    url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-policy/${identifier}`,
    sameAs: [],
    organization: null,
  });
});
