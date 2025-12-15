import { API_PATH_JGA_STUDY_LIST } from "@/api/paths.ts";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaStudyListRequestParams } from "@/api/entries/jgaStudy.ts";
import type { JgaStudySearchParams } from "@/schema/search/jgaStudy.ts";

export const fetchJgaStudies = async (params: JgaStudySearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_JGA_STUDY_LIST}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  const data = (await response.json()) as EntryListResponse;
  return data;
};

const parseParams = (params: JgaStudySearchParams): JgaStudyListRequestParams => {
  return {
    ...parseBaseParams(params),
    // Add JGA Study-specific parameters here if needed
  };
};

export const __TEST__fetchJgaStudyEntries = {
  parseParams,
};
