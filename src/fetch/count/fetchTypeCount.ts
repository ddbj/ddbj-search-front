import { API_PATH_TYPE_COUNT } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { CountTypesRequestParams, CountTypesResponse } from "@/api/count/types.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";

export const fetchTypeCount = async (params: BaseSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_TYPE_COUNT}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as CountTypesResponse;
  return data;
};

const parseParams = (params: AllSearchParams): CountTypesRequestParams => {
  const base = parseBaseParams(params);
  delete base.page;
  delete base.perPage;
  return base;
};

export const __TEST__fetchTypeCount = {
  parseParams,
};
