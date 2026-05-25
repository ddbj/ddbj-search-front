import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { makeJgaDatasetDetail } from "@/msw/data/jgaDataset.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

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
