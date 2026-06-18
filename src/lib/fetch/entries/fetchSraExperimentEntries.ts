import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { SraExperimentListRequestParams } from "@/schema/api/entries/sraExperiment.ts";
import { API_PATH_SRA_EXPERIMENT_LIST } from "@/schema/api/paths.ts";
import type { SraExperimentSearchParams } from "@/schema/search/sraExperiment.ts";

export const fetchSraExperiments = async (params: SraExperimentSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(
    `${API_PATH_SRA_EXPERIMENT_LIST}?${new URLSearchParams(searchParams)}`,
    {
      method: "GET",
    },
  );
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: SraExperimentSearchParams): SraExperimentListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraExperimentEntries = {
  parseParams,
};
