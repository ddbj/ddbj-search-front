import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { JgaDatasetDetailResponse } from "@/schema/api/detail/jgaDataset.ts";
import { API_PATH_JGA_DATASET_LIST } from "@/schema/api/paths.ts";

export const fetchJgaDatasetDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_DATASET_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<JgaDatasetDetailResponse>(response);
};
