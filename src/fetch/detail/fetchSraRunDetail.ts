import type { SraRunDetailResponse } from "@/api/detail/sraRun.ts";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";

export const fetchSraRunDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_RUN_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraRunDetailResponse>(response);
};
