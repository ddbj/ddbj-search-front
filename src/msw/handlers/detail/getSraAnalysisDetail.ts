import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { SraAnalysisDetailResponse } from "@/api/detail/sraAnalysis.ts";

const path = addIdentifierToPath(API_PATH_SRA_ANALYSIS_LIST, "MSW");

export const getSraAnalysisDetail = http.get<
  BaseDetailRequestParams,
  never,
  SraAnalysisDetailResponse
>(path, ({ params }) => {
  const { identifier } = params;

  return HttpResponse.json<SraAnalysisDetailResponse>({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW SRA Analysis Title",
    organism: null,
    description: "This is a mock SRA analysis detail for testing purposes.",
    type: "sra-analysis",
    visibility: "Unrestricted",
    status: "public",
    dbXref: [],
    properties: {},
    downloadUrl: null,
  });
});
