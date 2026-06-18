import { http, HttpResponse } from "msw";
import { makeGeaDetail } from "@/msw/data/gea.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/schema/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_GEA_LIST } from "@/schema/api/paths.ts";

const path = addIdentifierToPath(API_PATH_GEA_LIST, "MSW");

export const getGeaDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_GEA_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json(makeGeaDetail(identifier));
});
