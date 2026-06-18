import { http, HttpResponse } from "msw";
import { biosample1 } from "@/msw/data/biosample1.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/schema/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_BIOSAMPLE_LIST } from "@/schema/api/paths.ts";

const path = addIdentifierToPath(API_PATH_BIOSAMPLE_LIST, "MSW");

export const getBioSampleDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_BIOSAMPLE_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({ ...biosample1, identifier });
});
