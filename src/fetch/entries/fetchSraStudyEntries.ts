import { API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import { parseJsonResponse } from "@/fetch/utils/httpError.ts";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraStudyListRequestParams } from "@/api/entries/sraStudy.ts";
import type { SraStudySearchParams } from "@/schema/search/sraStudy.ts";

export const fetchSraStudies = async (params: SraStudySearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SRA_STUDY_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: SraStudySearchParams): SraStudyListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    // Add SRA Study-specific parameters here if needed
  };
};

export const __TEST__fetchSraStudyEntries = {
  parseParams,
};
