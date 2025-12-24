import { API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import type { JgaPolicyDetailResponse } from "@/api/detail/jgaPolicy.ts";

export const fetchJgaPolicyDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_POLICY_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as JgaPolicyDetailResponse;
  return data;
};
