import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import { makeSraExperimentDetail } from "@/msw/data/sraExperiment.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_SRA_EXPERIMENT_LIST, "MSW");

export const getSraExperimentDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_SRA_EXPERIMENT_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json(makeSraExperimentDetail(identifier));
});
