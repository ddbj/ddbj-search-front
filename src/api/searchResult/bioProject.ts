import { z } from "zod";
import { booleanStrings, tags } from "@/api/consts.ts";
import { API_PATH_BIOPROJECTS } from "@/api/paths.ts";
import { baseEntriesParamsSchema, entriesResponseSchema } from "@/api/searchResult/entries.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const bioprojectEntriesApiParamShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.enum(booleanStrings).optional(),
};
export const bioProjectEntriesApiParamSchema = baseEntriesParamsSchema.extend({
  ...bioprojectEntriesApiParamShape,
});
export type BioProjectEntriesApiParams = z.infer<typeof bioProjectEntriesApiParamSchema>;
export type BioProjectEntriesApiParamKeys = keyof BioProjectEntriesApiParams;

export const bioProjectEntriesDoc: RouteConfig = {
  path: API_PATH_BIOPROJECTS,
  method: "get",
  summary: "BioProjects",
  tags: [tags.searchResultList],
  request: {
    params: bioProjectEntriesApiParamSchema,
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
