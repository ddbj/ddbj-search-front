import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { BioProjectListRequestParams } from "@/api/entries/bioProject.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";

export const fetchBioProjects = async (params: BioprojectSearchParams) => {
  const searchParams = parseParams(params) as unknown as Record<string, string>;
  const response = await fetch(`${API_PATH_BIOPROJECT_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};
const parseParams = (params: BioprojectSearchParams): BioProjectListRequestParams => {
  const base = parseBaseParams(params);
  return {
    ...base,
    organization: params.organization ?? null,
    publication: params.publication ?? null,
    grant: params.grant ?? null,
    ...(params.umbrella !== undefined ? { umbrella: params.umbrella ? "true" : "false" } : {}),
  } as BioProjectListRequestParams;
};

export const __TEST__fetchBioProjectEntries = {
  parseParams,
};
