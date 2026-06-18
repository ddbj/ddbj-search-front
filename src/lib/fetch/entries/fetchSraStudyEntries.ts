import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { SraStudyListRequestParams } from "@/schema/api/entries/sraStudy.ts";
import { API_PATH_SRA_STUDY_LIST } from "@/schema/api/paths.ts";
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
    ...(params.publication ? { publication: params.publication } : {}),
  };
};

export const __TEST__fetchSraStudyEntries = {
  parseParams,
};
