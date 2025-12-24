import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import type { SraRunDetailResponse } from "@/api/detail/sraRun.ts";

export const fetchSraRunDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_RUN_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as SraRunDetailResponse;
  return data;
};
