import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { makeSraAnalysisDetail } from "@/msw/data/sraAnalysis.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_SRA_ANALYSIS_LIST, "MSW");

export const getSraAnalysisDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_SRA_ANALYSIS_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json(makeSraAnalysisDetail(identifier));
});
