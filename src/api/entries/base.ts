import { z } from "zod";
import { extendZod } from "@/utils/extendZod.ts";

extendZod();

export const entryListItemResponseSchema = z.object({
  identifier: z.string(),
  type: z.string().openapi({ example: "bioproject" }),
  title: z.string().openapi({ example: "Draparnaldia sp. CCAC 6921, genomic data." }),
  dbXrefsCount: z.record(z.string(), z.number()).openapi({
    example: { bioproject: 1, biosample: 1, "sra-study": 2 },
  }),
  datePublished: z.string().openapi({ example: "2013-05-31" }),
});
export type EntryListItemResponse = z.infer<typeof entryListItemResponseSchema>;

export const paginationResponseSchema = z.object({
  page: z.number().int().min(1).openapi({ example: 1 }),
  perPage: z.number().int().min(1).max(100).openapi({ example: 10 }),
  total: z.number().int().min(0).openapi({ example: 10000 }),
});
export type PaginationResponse = z.infer<typeof paginationResponseSchema>;

export const entryListResponseSchema = z.object({
  pagination: paginationResponseSchema,
  items: z.array(entryListItemResponseSchema),
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
