import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { API_PATH_SEARCH_ALL } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const entriesResponseSchema = z.object({
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
export type EntriesResponse = z.infer<typeof entriesResponseSchema>;
//
//
export const baseEntriesParamsSchema = z.object({
  page: z.string().optional(),
  perPage: z.string().optional(),
  keywords: z.string().optional(),
  datePublished: z.string().optional(),
  dateUpdated: z.string().optional(),
  // sortBy: z.string().optional(),
  // sortOrder: z.enum(["asc", "desc"]).optional(),
});
export type BaseEntriesParams = z.infer<typeof baseEntriesParamsSchema>;
//
//
export const allEntriesParamShape = {
  types: z.string().optional().meta({ description: "Comma separated list of DB types" }),
};
export const allEntriesParamSchema = baseEntriesParamsSchema.extend({
  ...allEntriesParamShape,
});
export type AllEntriesParams = z.infer<typeof allEntriesParamSchema>;
export type AllEntriesParamKeys = keyof AllEntriesParams;

export const allEntriesDoc: RouteConfig = {
  path: API_PATH_SEARCH_ALL,
  method: "get",
  summary: "All entries",
  tags: [tags.searchResultList],
  request: {
    params: allEntriesParamSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entriesResponseSchema,
        },
      },
    },
  },
};
