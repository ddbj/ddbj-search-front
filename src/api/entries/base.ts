import { z } from "zod";

export const entryListResponseSchema = z.object({
  page: z.number().openapi({ example: 1 }),
  perPage: z.number().openapi({ example: 10 }),
  total: z.number().openapi({ example: 10000 }),
  items: z.array(
    z.object({
      identifier: z.string(),
      type: z.string().openapi({ example: "bioproject" }),
      title: z.string().openapi({ example: "Draparnaldia sp. CCAC 6921, genomic data." }),
      dbXrefs: z.record(z.string(), z.number()).openapi({
        example: { bioproject: 1, biosample: 1, "sra-study": 2 },
      }),
      datePublished: z.string().openapi({ example: "2013-05-31" }),
    })
  ),
});
export type EntryListResponse = z.infer<typeof entryListResponseSchema>;
//
//
export const baseEntryListRequestParamsSchema = z.object({
  page: z.string().optional(),
  perPage: z.string().optional(),
  keywords: z.string().optional(),
  datePublished: z.string().optional(),
  dateUpdated: z.string().optional(),
  // sortBy: z.string().optional(),
  // sortOrder: z.enum(["asc", "desc"]).optional(),
});
export type BaseEntryListRequestParams = z.infer<typeof baseEntryListRequestParamsSchema>;
