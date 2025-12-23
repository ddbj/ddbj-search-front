import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";

const path = addIdentifierToPath(API_PATH_BIOPROJECT_LIST, "MSW");

export const getBioProjectDetail = http.get<
  BaseDetailRequestParams,
  never,
  BioProjectDetailResponse
>(path, ({ params }) => {
  const { identifier } = params;

  return HttpResponse.json<BioProjectDetailResponse>({
    identifier,
    type: "bioproject",
    dateCreated: null,
    dateModified: null,
    datePublished: null,
    title: `Mock BioProject ${identifier}`,
    organism: null,
    description: null,
    organization: null,
    publication: null,
    grant: null,
  });
});
