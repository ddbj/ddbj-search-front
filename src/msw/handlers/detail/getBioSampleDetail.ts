import { http, HttpResponse } from "msw";
import {
  addIdentifierToPath,
  API_PATH_BIOPROJECT_LIST,
  API_PATH_BIOSAMPLE_LIST,
} from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";
import type { BioSampleDetailResponse } from "@/api/detail/bioSample.ts";

const path = addIdentifierToPath(API_PATH_BIOSAMPLE_LIST, "MSW");

export const getBioSampleDetail = http.get<BaseDetailRequestParams, never, BioSampleDetailResponse>(
  path,
  ({ params }) => {
    const { identifier } = params;

    return HttpResponse.json<BioSampleDetailResponse>({
      identifier,
      type: "bioproject",
      dateCreated: null,
      dateModified: null,
      datePublished: null,
      title: `Mock BioSample ${identifier}`,
      organism: null,
      description: null,
    });
  }
);
