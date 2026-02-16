import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_JGA_DAC_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { JgaDacDetailResponse } from "@/api/detail/jgaDac.ts";

const path = addIdentifierToPath(API_PATH_JGA_DAC_LIST, "MSW");

export const getJgaDacDetail = http.get<BaseDetailRequestParams, never, JgaDacDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<JgaDacDetailResponse>({
      identifier,
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2024-01-02T00:00:00Z",
      datePublished: "2024-01-03T00:00:00Z",
      title: "MSW JGA DAC Title",
      organism: null,
      description: "This is a mock JGA DAC detail for testing purposes.",
      type: "jga-dac",
      accessibility: "public-access",
      status: "live",
      dbXrefs: [],
      dbXrefsCount: {},
      properties: {},
      distribution: [],
      isPartOf: "JGA DAC",
      name: null,
      url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-dac/${identifier}`,
      sameAs: [],
    });
  }
);
