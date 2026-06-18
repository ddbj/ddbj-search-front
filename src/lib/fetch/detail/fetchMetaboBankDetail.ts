import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { MetaboBankDetailResponse } from "@/schema/api/detail/metaboBank.ts";
import { API_PATH_METABOBANK_LIST } from "@/schema/api/paths.ts";

export const fetchMetaboBankDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_METABOBANK_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<MetaboBankDetailResponse>(response);
};
