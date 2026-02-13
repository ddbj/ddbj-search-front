import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { SraRunDetailResponse } from "@/api/detail/sraRun.ts";

const path = addIdentifierToPath(API_PATH_SRA_RUN_LIST, "MSW");

export const getSraRunDetail = http.get<BaseDetailRequestParams, never, SraRunDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<SraRunDetailResponse>({
      identifier,
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2024-01-02T00:00:00Z",
      datePublished: "2024-01-03T00:00:00Z",
      title: "MSW SRA Run Title",
      organism: null,
      description: "This is a mock SRA Run detail for testing purposes.",
      type: "sra-run",
      accessibility: "public-access",
      status: "live",
      dbXrefs: [],
      dbXrefsCount: {},
      properties: {},
      downloadUrl: null,
    });
  }
);
