import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { BioProjectListRequestParams } from "@/schema/api/entries/bioProject.ts";
import { API_PATH_BIOPROJECT_LIST } from "@/schema/api/paths.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";

export const fetchBioProjects = async (params: BioprojectSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(`${API_PATH_BIOPROJECT_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};
const parseParams = (params: BioprojectSearchParams): BioProjectListRequestParams => {
  const result: BioProjectListRequestParams = parseBaseEntryParams(params);
  if (params.publication) {
    result.publication = params.publication;
  }
  if (params.grant) {
    result.grant = params.grant;
  }
  if (params.objectTypes && params.objectTypes.length) {
    result.objectTypes = params.objectTypes.join(",");
  }
  return result;
};

export const __TEST__fetchBioProjectEntries = {
  parseParams,
};
