import { z } from "zod";

export const entryItemShape = {};

export const entryItemSchema = z.object({
  identifier: z.string(),
  type: z.string().openapi({ example: "bioproject" }),
  title: z.string().openapi({ example: "Draparnaldia sp. CCAC 6921, genomic data." }),
  dbXrefs: z.record(z.string(), z.number()).openapi({
    example: { bioproject: 1, biosample: 1, "sra-study": 2 },
  }),
  datePublished: z.string().openapi({ example: "2013-05-31" }),
});

export const entryListResponseSchema = z.object({
  pagination: z.object({
    page: z.int().openapi({ example: 1 }),
    perPage: z.int().openapi({ example: 10 }),
    total: z.int().openapi({ example: 10000 }),
  }),
  items: z.array(entryItemSchema),
});
export type EntryListResponse = z.infer<typeof entryListResponseSchema>;
//
//
export const baseEntryListRequestParamsSchema = z.object({
  page: z.string().optional().openapi({ description: "integer string; treat as '1' if omitted." }),
  perPage: z
    .string()
    .optional()
    .openapi({ description: "integer string; treat as '10' if omitted." }),
  keywords: z
    .string()
    .optional()
    .openapi({ description: "Comma separated keywords", example: "homo sapience,Draparnaldia" }),
  datePublished: z.string().optional().openapi({ example: "2020-05-01,2021-04-30" }),
  dateUpdated: z.string().optional().openapi({ example: "2020-05-01,2021-04-30" }),
  // sortBy: z.string().optional(),
  // sortOrder: z.enum(["asc", "desc"]).optional(),
});
export type BaseEntryListRequestParams = z.infer<typeof baseEntryListRequestParamsSchema>;
