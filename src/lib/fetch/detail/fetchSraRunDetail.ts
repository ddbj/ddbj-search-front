import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { SraRunDetailResponse } from "@/schema/api/detail/sraRun.ts";
import { API_PATH_SRA_RUN_LIST } from "@/schema/api/paths.ts";

export const fetchSraRunDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_RUN_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraRunDetailResponse>(response);
};
