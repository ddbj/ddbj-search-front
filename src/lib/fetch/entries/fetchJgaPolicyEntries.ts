import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { JgaPolicyListRequestParams } from "@/schema/api/entries/jgaPolicy.ts";
import { API_PATH_JGA_POLICY_LIST } from "@/schema/api/paths.ts";
import type { JgaPolicySearchParams } from "@/schema/search/jgaPolicy.ts";

export const fetchJgaPolicies = async (params: JgaPolicySearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_POLICY_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: JgaPolicySearchParams): JgaPolicyListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchJgaPolicyEntries = {
  parseParams,
};
