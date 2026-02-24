import { http, HttpResponse } from "msw";
import { API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getSraExperimentList = http.get<never, never, EntryListResponse>(
  API_PATH_SRA_EXPERIMENT_LIST,
  ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams;
    const page: number = parseInt(search.get("page") ?? "1", 10);
    return HttpResponse.json({
      pagination: {
        page,
        perPage: 10,
        total: 10000,
      },
      items: Array(10)
        .fill(0)
        .map((_, _i) => {
          const type = "sra-experiment";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Illumina HiSeq 2000 paired end sequencing",
            name: "Illumina HiSeq 2000 paired end sequencing",
            description: "Illumina HiSeq 2000 paired end sequencing",
            dbXrefsCount: { "sra-run": 3, "sra-sample": 1, biosample: 1, bioproject: 1 },
            datePublished: "2023-04-15",
            dateModified: "2023-04-15",
            dateCreated: "2023-04-15",
          };
        }),
    });
  }
);
