import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { SraStudyDetailResponse } from "@/api/detail/sraStudy.ts";

const path = addIdentifierToPath(API_PATH_SRA_STUDY_LIST, "MSW");

export const getSraStudyDetail = http.get<BaseDetailRequestParams, never, SraStudyDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<SraStudyDetailResponse>({
      identifier,
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2024-01-02T00:00:00Z",
      datePublished: "2024-01-03T00:00:00Z",
      title: "MSW SRA Study Title",
      organism: null,
      description: "This is a mock SRA Study detail for testing purposes.",
      type: "sra-study",
      visibility: "Unrestricted",
      status: "public",
      dbXrefs: [],
      dbXrefsCount: {},
      properties: {},
      downloadUrl: null,
    });
  }
);
