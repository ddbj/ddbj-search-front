import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { JgaDacListRequestParams } from "@/schema/api/entries/jgaDac.ts";
import { API_PATH_JGA_DAC_LIST } from "@/schema/api/paths.ts";
import type { JgaDacSearchParams } from "@/schema/search/jgaDac.ts";

export const fetchJgaDacs = async (params: JgaDacSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_DAC_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: JgaDacSearchParams): JgaDacListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchJgaDacEntries = {
  parseParams,
};
