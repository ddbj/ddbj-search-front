import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { BioProjectListRequestParams } from "@/api/entries/bioProject.ts";

export const getBioProjectList = http.get<
  BioProjectListRequestParams,
  {},
  EntryListResponse,
  typeof API_PATH_BIOPROJECT_LIST
>(API_PATH_BIOPROJECT_LIST, ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams;
  const page: number = parseInt(search.get("page") ?? "1");
  return HttpResponse.json({
    pagination: {
      page,
      perPage: 10,
      total: 10000,
    },
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
