import { http, HttpResponse } from "msw";
import { API_PATH_SEARCH } from "@/consts/api.ts";
import type { SearchAPIResponse } from "@/schema/api/search.ts";

export const handlers = [
  http.get<{}, {}, SearchAPIResponse, typeof API_PATH_SEARCH>(API_PATH_SEARCH, (param) => {
    return HttpResponse.json({
      page: 1,
      perPage: 10,
      total: 10000,
      items: Array(10).fill({
        identifier: "SRR12345678",
        title: "SRR12345678",
      }),
    });
  }),
];
