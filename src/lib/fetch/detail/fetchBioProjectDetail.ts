import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";
import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";

export const fetchBioProjectDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_BIOPROJECT_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<BioProjectDetailResponse>(response);
};
