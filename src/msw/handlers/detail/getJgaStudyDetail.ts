import { http, HttpResponse } from "msw";
import { makeJgaStudyDetail } from "@/msw/data/jgaStudy.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/schema/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_JGA_STUDY_LIST } from "@/schema/api/paths.ts";

const path = addIdentifierToPath(API_PATH_JGA_STUDY_LIST, "MSW");

export const getJgaStudyDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_JGA_STUDY_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json(makeJgaStudyDetail(identifier));
});
