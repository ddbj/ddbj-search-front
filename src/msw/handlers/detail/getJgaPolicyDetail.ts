import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { JgaPolicyDetailResponse } from "@/api/detail/jgaPolicy.ts";

const path = addIdentifierToPath(API_PATH_JGA_POLICY_LIST, "MSW");

export const getJgaPolicyDetail = http.get<BaseDetailRequestParams, never, JgaPolicyDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<JgaPolicyDetailResponse>({
      identifier,
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2024-01-02T00:00:00Z",
      datePublished: "2024-01-03T00:00:00Z",
      title: "MSW JGA Policy Title",
      organism: null,
      description: "This is a mock JGA policy detail for testing purposes.",
      type: "jga-policy",
      visibility: "Unrestricted",
      status: "public",
      dbXref: [],
      properties: {},
      downloadUrl: null,
    });
  }
);
