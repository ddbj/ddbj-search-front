import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { SraExperimentDetailResponse } from "@/schema/api/detail/sraExperiment.ts";
import { API_PATH_SRA_EXPERIMENT_LIST } from "@/schema/api/paths.ts";

export const fetchSraExperimentDetail = async (identifier: string) => {
  const response = await fetch(`${API_PATH_SRA_EXPERIMENT_LIST}${identifier}`, {
    method: "GET",
  });
  return await parseJsonResponse<SraExperimentDetailResponse>(response);
};
