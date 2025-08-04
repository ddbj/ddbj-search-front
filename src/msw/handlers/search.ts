import { http, HttpResponse } from "msw";
import { API_PATH_SEARCH_ALL } from "@/consts/api.ts";
import type { SearchApiParams, SearchAPIResponse } from "@/schema/api/search.ts";

export const handlers = [
  http.get<SearchApiParams, {}, SearchAPIResponse, typeof API_PATH_SEARCH_ALL>(
    API_PATH_SEARCH_ALL,
    ({ request }) => {
      const url = new URL(request.url);
      const page: number = parseInt(url.searchParams.get("page") ?? "1");
      return HttpResponse.json({
        page,
        perPage: 10,
        total: 10000,
        items: Array(10).fill({
          identifier: "SRR12345678",
          title: "SRR12345678",
        }),
      });
    }
  ),
];
