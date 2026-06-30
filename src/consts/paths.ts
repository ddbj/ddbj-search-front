import { envApiPath, isMSWEnabled } from "@/lib/env/parseEnvVariables.ts";

const API_PATH_MSW = "/api/";
export const API_PATH_STAGING = "https://ddbj-staging.nig.ac.jp/search/api/";
export const API_PATH_LIVE = "https://ddbj.nig.ac.jp/search/api/";
const API_PATH = envApiPath ?? API_PATH_LIVE;
export const BASE_API_PATH = isMSWEnabled ? API_PATH_MSW : API_PATH;
