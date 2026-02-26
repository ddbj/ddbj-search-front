import { API_PATH_JGA_DAC_LIST } from "@/api/paths.ts";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaDacListRequestParams } from "@/api/entries/jgaDac.ts";
import type { JgaDacSearchParams } from "@/schema/search/jgaDac.ts";

export const fetchJgaDacs = async (params: JgaDacSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_DAC_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: JgaDacSearchParams): JgaDacListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    // Add JGA DAC-specific parameters here if needed
  };
};

export const __TEST__fetchJgaDacEntries = {
  parseParams,
};
