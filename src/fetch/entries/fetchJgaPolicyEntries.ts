import { API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaPolicyListRequestParams } from "@/api/entries/jgaPolicy.ts";
import type { JgaPolicySearchParams } from "@/schema/search/jgaPolicy.ts";

export const fetchJgaPolicies = async (params: JgaPolicySearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_POLICY_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: JgaPolicySearchParams): JgaPolicyListRequestParams => {
  return {
    ...parseBaseParams(params),
    // Add JGA Policy-specific parameters here if needed
  };
};

export const __TEST__fetchJgaPolicyEntries = {
  parseParams,
};
