import { http, HttpResponse } from "msw";
import { makeMetaboBankDetail } from "@/msw/data/metaboBank.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/schema/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_METABOBANK_LIST } from "@/schema/api/paths.ts";

const path = addIdentifierToPath(API_PATH_METABOBANK_LIST, "MSW");

export const getMetaboBankDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_METABOBANK_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json(makeMetaboBankDetail(identifier));
});
