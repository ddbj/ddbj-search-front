import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { BioSampleDetailResponse } from "@/schema/api/detail/bioSample.ts";
import { API_PATH_BIOSAMPLE_LIST } from "@/schema/api/paths.ts";

export const fetchBioSampleDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_BIOSAMPLE_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<BioSampleDetailResponse>(response);
};
