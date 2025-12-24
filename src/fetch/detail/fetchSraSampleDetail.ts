import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import type { SraSampleDetailResponse } from "@/api/detail/sraSample.ts";

export const fetchSraSampleDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_SAMPLE_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as SraSampleDetailResponse;
  return data;
};
