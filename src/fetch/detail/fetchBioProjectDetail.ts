import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";

export const fetchBioProjectDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_BIOPROJECT_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as BioProjectDetailResponse;
  return data;
};
