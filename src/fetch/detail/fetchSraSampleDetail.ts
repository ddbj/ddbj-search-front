import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";
import type { SraSampleDetailResponse } from "@/api/detail/sraSample.ts";

export const fetchSraSampleDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_SAMPLE_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraSampleDetailResponse>(response);
};
