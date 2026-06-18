import { http, HttpResponse } from "msw";
import { makeSraExperimentDetail } from "@/msw/data/sraExperiment.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/schema/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_EXPERIMENT_LIST } from "@/schema/api/paths.ts";

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
