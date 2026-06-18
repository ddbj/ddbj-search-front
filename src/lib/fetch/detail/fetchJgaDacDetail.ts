import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { JgaDacDetailResponse } from "@/schema/api/detail/jgaDac.ts";
import { API_PATH_JGA_DAC_LIST } from "@/schema/api/paths.ts";

export const fetchJgaDacDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_DAC_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<JgaDacDetailResponse>(response);
};
