import { API_PATH_BIOPROJECTS } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { BioProjectEntriesApiParams } from "@/api/searchResult/bioProject.ts";
import type { EntriesResponse } from "@/api/searchResult/entries.ts";
import type { BioprojectSearchParams } from "@/schema/search.ts";

export const fetchBioProjects = async (params: BioprojectSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_BIOPROJECTS}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntriesResponse;
  return data;
};
const parseParams = (params: BioprojectSearchParams): BioProjectEntriesApiParams => {
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
