export const BASE_URL = DDBJ_SEARCH_BASE_URL || window.location.origin;
export const URL_PREFIX = DDBJ_SEARCH_FRONT_URL_PREFIX;
export const ENTRY_URL = `${BASE_URL}${URL_PREFIX}/entry`;
export const ELASTICSEARCH_URL = `${BASE_URL}${URL_PREFIX}/resources`;

export const LOCALE = Object.freeze({
  JA: "ja",
  EN: "en",
  DEFAULT: "ja",
});
