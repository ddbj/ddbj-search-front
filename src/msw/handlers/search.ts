import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
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
        items: Array(10)
          .fill(0)
          .map((_, i) => {
            return {
              identifier: uuidv4().slice(0, 8),
              type: "bioproject",
              title: "Draparnaldia sp. CCAC 6921, genomic data.",
              dbXrefs: { "sra-study": 1, "sra-run": 18, "sra-experiment": 4, biosample: 1 },
              datePublished: "2013-05-31",
            };
          }),
      });
    }
  ),
];
