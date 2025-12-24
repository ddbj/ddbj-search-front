import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { biosample1 } from "@/msw/data/biosample1.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { BioSampleDetailResponse } from "@/api/detail/bioSample.ts";

const path = addIdentifierToPath(API_PATH_BIOSAMPLE_LIST, "MSW");

export const getBioSampleDetail = http.get<BaseDetailRequestParams, never, BioSampleDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<BioSampleDetailResponse>({ ...biosample1, identifier });
  }
);
