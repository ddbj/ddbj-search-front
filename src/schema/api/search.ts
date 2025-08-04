import { z } from "zod";
import { dbTypeList } from "@/consts/db.ts";

export const SearchApiResponseSchema = z.object({
  page: z.number(),
  perPage: z.number(),
  total: z.number(),
  items: z.array(
    z.object({
      identifier: z.string(),
      title: z.string(),
      type: z.enum(dbTypeList),
    })
  ),
});
export type SearchAPIResponse = z.infer<typeof SearchApiResponseSchema>;

export const SearchApiParamsSchema = z.object({
  page: z.string().optional(),
  perPage: z.string().optional(),
  types: z.string().optional(),
  keywords: z.string().optional(),
  datePublished: z.string().optional(),
  dateUpdated: z.string().optional(),
});
export type SearchApiParams = z.infer<typeof SearchApiParamsSchema>;
export type SearchApiParamKeys = keyof SearchApiParams;
