import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { SraSampleDetailResponse } from "@/api/detail/sraSample.ts";

const path = addIdentifierToPath(API_PATH_SRA_SAMPLE_LIST, "MSW");

export const getSraSampleDetail = http.get<BaseDetailRequestParams, never, SraSampleDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<SraSampleDetailResponse>({
      identifier,
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2024-01-02T00:00:00Z",
      datePublished: "2024-01-03T00:00:00Z",
      title: "MSW SRA Sample Title",
      organism: null,
      description: "This is a mock SRA Sample detail for testing purposes.",
      type: "sra-sample",
      visibility: "Unrestricted",
      status: "public",
      dbXref: [],
      properties: {},
      downloadUrl: null,
    });
  }
);
