import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { BioProjectDetailResponse } from "@/schema/api/detail/bioProject.ts";
import { API_PATH_BIOPROJECT_LIST } from "@/schema/api/paths.ts";

export const fetchBioProjectDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_BIOPROJECT_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<BioProjectDetailResponse>(response);
};
