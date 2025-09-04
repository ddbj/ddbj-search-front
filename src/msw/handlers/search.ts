import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_BIOPROJECTS, API_PATH_SEARCH_ALL } from "@/api/paths.ts";
import type { EntriesResponse } from "@/api/searchResult/entries.ts";
import type { BioProjectEntriesApiParams } from "@/api/searchResult/bioProject.ts";

export const handlers = [
  http.get<{}, {}, EntriesResponse, typeof API_PATH_SEARCH_ALL>(
    API_PATH_SEARCH_ALL,
    async ({ request }) => {
      // await delay(Math.random() * 500 + 300);
      const url = new URL(request.url);
      const search = url.searchParams;
      const page: number = parseInt(search.get("page") ?? "1");
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
  http.get<BioProjectEntriesApiParams, {}, EntriesResponse, typeof API_PATH_BIOPROJECTS>(
    API_PATH_BIOPROJECTS,
    ({ request }) => {
      const url = new URL(request.url);
      const search = url.searchParams;
      const page: number = parseInt(search.get("page") ?? "1");
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
