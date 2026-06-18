import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { GeaDetailResponse } from "@/schema/api/detail/gea.ts";
import { API_PATH_GEA_LIST } from "@/schema/api/paths.ts";

export const fetchGeaDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_GEA_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<GeaDetailResponse>(response);
};
