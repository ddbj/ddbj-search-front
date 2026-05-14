import type { MetaboBankDetailResponse } from "@/api/detail/metaboBank.ts";
import { API_PATH_METABOBANK_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";

export const fetchMetaboBankDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_METABOBANK_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<MetaboBankDetailResponse>(response);
};
