import { parseBaseEntryParams } from "@/lib/fetch/entries/parseBaseEntryParams.ts";
import { parseJsonResponse } from "@/lib/fetch/http/httpError.ts";
import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { JgaStudyListRequestParams } from "@/schema/api/entries/jgaStudy.ts";
import { API_PATH_JGA_STUDY_LIST } from "@/schema/api/paths.ts";
import type { JgaStudySearchParams } from "@/schema/search/jgaStudy.ts";

export const fetchJgaStudies = async (params: JgaStudySearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_STUDY_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return await parseJsonResponse<EntryListResponse>(response);
};

const parseParams = (params: JgaStudySearchParams): JgaStudyListRequestParams => {
  return {
    ...parseBaseEntryParams(params),
    ...(params.publication ? { publication: params.publication } : {}),
    ...(params.grant ? { grant: params.grant } : {}),
  };
};

export const __TEST__fetchJgaStudyEntries = {
  parseParams,
};
