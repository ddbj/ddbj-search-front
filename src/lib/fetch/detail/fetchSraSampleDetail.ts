import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { SraSampleDetailResponse } from "@/schema/api/detail/sraSample.ts";
import { API_PATH_SRA_SAMPLE_LIST } from "@/schema/api/paths.ts";

export const fetchSraSampleDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_SAMPLE_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraSampleDetailResponse>(response);
};
