import { z } from "zod";
import { dbTypeList } from "@/consts/db.ts";
import { allSearchSchemas } from "@/schema/search.ts";

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

export const SearchApiParamsSchema = allSearchSchemas;
export type SearchApiParams = z.infer<typeof SearchApiParamsSchema>;
