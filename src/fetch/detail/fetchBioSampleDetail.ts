import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import type { BioSampleDetailResponse } from "@/api/detail/bioSample.ts";

export const fetchBioSampleDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_BIOSAMPLE_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as BioSampleDetailResponse;
  return data;
};
