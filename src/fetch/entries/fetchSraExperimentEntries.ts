import { API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraExperimentListRequestParams } from "@/api/entries/sraExperiment.ts";
import type { SraExperimentSearchParams } from "@/schema/search/sraExperiment.ts";

export const fetchSraExperiments = async (params: SraExperimentSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_SRA_EXPERIMENT_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: SraExperimentSearchParams): SraExperimentListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    // Add SRA Experiment-specific parameters here if needed
  };
};

export const __TEST__fetchSraExperimentEntries = {
  parseParams,
};
