import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
const path = addIdentifierToPath(API_PATH_BIOPROJECT_LIST, "MSW");

export const getBioProjectDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(identifier, `${API_PATH_BIOPROJECT_LIST}${identifier}`);

  if (failureResponse) {
    return failureResponse;
  }
  return HttpResponse.json({ ...bioproject1, identifier });
});
