import type { GeaDetailResponse } from "@/api/detail/gea.ts";
import { API_PATH_GEA_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";

export const fetchGeaDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_GEA_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<GeaDetailResponse>(response);
};
