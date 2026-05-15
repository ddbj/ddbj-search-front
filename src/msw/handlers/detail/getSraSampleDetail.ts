import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { sraSample1 } from "@/msw/data/sraSample1.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_SRA_SAMPLE_LIST, "MSW");

export const getSraSampleDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_SRA_SAMPLE_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
    ...sraSample1,
    identifier,
    url: `https://ddbj-staging.nig.ac.jp/search/entry/sra-sample/${identifier}`,
  });
});
