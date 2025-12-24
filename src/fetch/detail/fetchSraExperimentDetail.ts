import { API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import type { SraExperimentDetailResponse } from "@/api/detail/sraExperiment.ts";

export const fetchSraExperimentDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_EXPERIMENT_LIST}${identifier}`, {
    method: "GET",
  });
  const data = (await response.json()) as SraExperimentDetailResponse;
  return data;
};
