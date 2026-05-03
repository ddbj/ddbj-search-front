import type { BioSampleDetailResponse } from "@/api/detail/bioSample.ts";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";

export const fetchBioSampleDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_BIOSAMPLE_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<BioSampleDetailResponse>(response);
};
