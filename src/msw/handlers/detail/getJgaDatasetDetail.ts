import { http, HttpResponse } from "msw";
import { makeJgaDatasetDetail } from "@/msw/data/jgaDataset.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";
import type { BaseDetailRequestParams } from "@/schema/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_JGA_DATASET_LIST } from "@/schema/api/paths.ts";

const path = addIdentifierToPath(API_PATH_JGA_DATASET_LIST, "MSW");

export const getJgaDatasetDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_JGA_DATASET_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json(makeJgaDatasetDetail(identifier));
});
