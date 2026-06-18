const isMSW = import.meta.env.VITE_MSW === "true";
const API_PATH_MSW = "/api/";
export const API_PATH_STAGING = "https://ddbj-staging.nig.ac.jp/search/api/";
export const API_PATH_LIVE = "https://staging.nig.ac.jp/search/api/";
const API_PATH = import.meta?.env?.VITE_API_PATH ?? API_PATH_LIVE;
export const BASE_API_PATH = isMSW ? API_PATH_MSW : API_PATH;
