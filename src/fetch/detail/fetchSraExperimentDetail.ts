import type { SraExperimentDetailResponse } from "@/api/detail/sraExperiment.ts";
import { API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";

export const fetchSraExperimentDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_EXPERIMENT_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraExperimentDetailResponse>(response);
};
