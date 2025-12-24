import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import type { JgaDatasetDetailResponse } from "@/api/detail/jgaDataset.ts";

export const fetchJgaDatasetDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_JGA_DATASET_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as JgaDatasetDetailResponse;
  return data;
};
