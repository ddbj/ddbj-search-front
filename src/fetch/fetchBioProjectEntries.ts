import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { BioProjectListRequestParams } from "@/api/entries/bioProject.ts";
import type { BioprojectSearchParams } from "@/schema/search.ts";

export const fetchBioProjects = async (params: BioprojectSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_BIOPROJECT_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};
const parseParams = (params: BioprojectSearchParams): BioProjectListRequestParams => {
  return {
    ...parseBaseParams(params),
    ...(params.organization ? { organization: params.organization } : {}),
    ...(params.publication ? { publication: params.publication } : {}),
    ...(params.grant ? { grant: params.grant } : {}),
    ...(params.umbrella !== undefined ? { umbrella: params.umbrella ? "TRUE" : "FALSE" } : {}),
  };
};

export const __TEST__fetchSearchALL = {
  parseParams,
};
