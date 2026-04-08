import { API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";
import type { JgaPolicyDetailResponse } from "@/api/detail/jgaPolicy.ts";

export const fetchJgaPolicyDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_POLICY_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<JgaPolicyDetailResponse>(response);
};
