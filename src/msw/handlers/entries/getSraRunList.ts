import { http, HttpResponse } from "msw";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getSraRunList = http.get<never, never, EntryListResponse>(
  API_PATH_SRA_RUN_LIST,
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
          const type = "sra-run";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Illumina HiSeq 2000 sequencing; GSM1234567: Sample 1",
            name: "Illumina HiSeq 2000 sequencing; GSM1234567: Sample 1",
            description: "Illumina HiSeq 2000 sequencing; GSM1234567: Sample 1",
            dbXrefsCount: { "sra-experiment": 1, "sra-sample": 1, biosample: 1 },
            datePublished: "2023-04-15",
            dateModified: "2023-04-15",
            dateCreated: "2023-04-15",
          };
        }),
    });
  }
);
