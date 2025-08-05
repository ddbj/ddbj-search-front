import { API_PATH_SEARCH_ALL } from "@/consts/api.ts";
import type { SearchApiParams } from "@/schema/api/search.ts";
import type { AllSearchParams } from "@/schema/search.ts";

export const fetchSearchAll = async (params: AllSearchParams) => {
  const searchParams = parseParams(params);
  const response = await fetch(`${API_PATH_SEARCH_ALL}?${new URLSearchParams(searchParams)}`, {
    method: "GET",
  });
  return response;
};

const parseParams = (params: AllSearchParams): SearchApiParams => {
  return {
    ...(params.page && params.page > 0 ? { page: params.page.toFixed().toString() } : {}),
    ...(params.perPage && params.perPage > 0
      ? { perPage: params.perPage.toFixed().toString() }
      : {}),
    ...(params.types && params.types.length ? { types: params.types.join(",") } : {}),
    ...(params.keywords && params.keywords.length ? { keywords: params.keywords.join(",") } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    ...(params.dateUpdated ? { dateUpdated: params.dateUpdated } : {}),
  };
};

export const __TEST__fetchSearchALL = {
  parseParams,
};
