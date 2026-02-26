import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraRunListRequestParams } from "@/api/entries/sraRun.ts";
import type { SraRunSearchParams } from "@/schema/search/sraRun.ts";

export const fetchSraRuns = async (params: SraRunSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_RUN_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: SraRunSearchParams): SraRunListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    // Add SRA Run-specific parameters here if needed
  };
};

export const __TEST__fetchSraRunEntries = {
  parseParams,
};
