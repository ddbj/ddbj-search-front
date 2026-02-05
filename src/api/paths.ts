import { extendZod } from "@/utils/extendZod.ts";

const BASE_API_PATH = "/api/";

export const API_PATH_ALL_ENTRIES_LIST = `${BASE_API_PATH}entries/`;
export const API_PATH_BIOPROJECT_LIST = `${BASE_API_PATH}entries/bioproject/`;
export const API_PATH_BIOSAMPLE_LIST = `${BASE_API_PATH}entries/biosample/`;
export const API_PATH_SRA_RUN_LIST = `${BASE_API_PATH}entries/sra-run/`;
export const API_PATH_SRA_EXPERIMENT_LIST = `${BASE_API_PATH}entries/sra-experiment/`;
export const API_PATH_SRA_SAMPLE_LIST = `${BASE_API_PATH}entries/sra-sample/`;
export const API_PATH_SRA_ANALYSIS_LIST = `${BASE_API_PATH}entries/sra-analysis/`;
export const API_PATH_SRA_SUBMISSION_LIST = `${BASE_API_PATH}entries/sra-submission/`;
export const API_PATH_SRA_STUDY_LIST = `${BASE_API_PATH}entries/sra-study/`;
export const API_PATH_JGA_DATASET_LIST = `${BASE_API_PATH}entries/jga-dataset/`;
export const API_PATH_JGA_STUDY_LIST = `${BASE_API_PATH}entries/jga-study/`;
export const API_PATH_JGA_POLICY_LIST = `${BASE_API_PATH}entries/jga-policy/`;
export const API_PATH_JGA_DAC_LIST = `${BASE_API_PATH}entries/jga-dac/`;
export const API_PATH_TYPE_COUNT = `${BASE_API_PATH}count/types/`;
export const API_PATH_DB_XREF = `${BASE_API_PATH}db-xrefs/`;

extendZod();

export const omitBaseApiPath = (path: string) => {
  if (path.startsWith(BASE_API_PATH)) {
    return path.slice(BASE_API_PATH.length - 1);
  }
  return path;
};

export const addIdentifierToPath = (path: string, apiType: "MSW" | "openAPI"): string => {
  switch (apiType) {
    case "MSW":
      return `${path}:identifier`;
    case "openAPI":
      return `${path}{identifier}`;
    default:
      console.warn(`Unknown apiType: ${apiType}`);
      return path;
  }
};
