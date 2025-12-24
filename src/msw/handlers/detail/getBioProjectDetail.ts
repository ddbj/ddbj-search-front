import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";

const path = addIdentifierToPath(API_PATH_BIOPROJECT_LIST, "MSW");

export const getBioProjectDetail = http.get<
  BaseDetailRequestParams,
  never,
  BioProjectDetailResponse
>(path, ({ params }) => {
  const { identifier } = params;

  return HttpResponse.json<BioProjectDetailResponse>({ ...bioproject1, identifier });
});
