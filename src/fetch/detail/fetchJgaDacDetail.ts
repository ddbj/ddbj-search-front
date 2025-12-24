import { API_PATH_JGA_DAC_LIST } from "@/api/paths.ts";
import type { JgaDacDetailResponse } from "@/api/detail/jgaDac.ts";

export const fetchJgaDacDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_DAC_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as JgaDacDetailResponse;
  return data;
};
