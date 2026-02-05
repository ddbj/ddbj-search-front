import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_JGA_STUDY_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { JgaStudyDetailResponse } from "@/api/detail/jgaStudy.ts";

const path = addIdentifierToPath(API_PATH_JGA_STUDY_LIST, "MSW");

export const getJgaStudyDetail = http.get<BaseDetailRequestParams, never, JgaStudyDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<JgaStudyDetailResponse>({
      identifier,
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2024-01-02T00:00:00Z",
      datePublished: "2024-01-03T00:00:00Z",
      title: "MSW JGA Study Title",
      organism: null,
      description: "This is a mock JGA Study detail for testing purposes.",
      type: "jga-study",
      visibility: "Unrestricted",
      status: "public",
      dbXrefs: [],
      dbXrefsCount: {},
      properties: {},
      downloadUrl: null,
    });
  }
);
