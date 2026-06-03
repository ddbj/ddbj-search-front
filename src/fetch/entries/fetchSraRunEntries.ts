import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraRunListRequestParams } from "@/api/entries/sraRun.ts";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { SraRunSearchParams } from "@/schema/search/sraRun.ts";

export const fetchSraRuns = async (params: SraRunSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_RUN_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: SraRunSearchParams): SraRunListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraRunEntries = {
  parseParams,
};
