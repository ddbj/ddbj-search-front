import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_ALL_ENTRIES_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getAllEntryList = http.get<
  {},
  {},
  EntryListResponse,
  typeof API_PATH_ALL_ENTRIES_LIST
>(API_PATH_ALL_ENTRIES_LIST, async ({ request }) => {
  // await delay(Math.random() * 500 + 300);
  const url = new URL(request.url);
  const search = url.searchParams;
  const page: number = parseInt(search.get("page") ?? "1");
  return HttpResponse.json({
    page,
    perPage: 10,
    total: 10000,
    took: Math.ceil(Math.random() * 30) + 1,
    items: Array(10)
      .fill(0)
      .map((_, _i) => {
        return {
          identifier: uuidv4().slice(0, 8),
          type: "bioproject",
          title: "Draparnaldia sp. CCAC 6921, genomic data.",
          dbXrefs: { "sra-study": 1, "sra-run": 18, "sra-experiment": 4, biosample: 1 },
          datePublished: "2013-05-31",
        };
      }),
  });
});
