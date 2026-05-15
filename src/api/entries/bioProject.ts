import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_BIOPROJECT_LIST, omitBaseApiPath } from "@/api/paths.ts";

export const bioProjectListRequestParamsShape = {
  objectTypes: z.string().optional().openapi({
    description:
      "Filter by BioProject objectType (comma-separated). Allowed: BioProject, UmbrellaBioProject. Specifying both is equivalent to omitting the filter.",
    example: "BioProject",
  }),
};
const bioProjectListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...bioProjectListRequestParamsShape,
});
export type BioProjectListRequestParams = z.infer<typeof bioProjectListRequestParamsSchema>;

export const bioProjectListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_BIOPROJECT_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_BIOPROJECT_LIST),
  description: "BioProject list",
  tags: [tags.searchResultList],
  request: {
    query: bioProjectListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema.omit({ items: true }).extend({
            items: z.array(
              entryListItemResponseSchema
                .omit({ type: true })
                .extend({ type: z.literal("bioproject") }),
            ),
          }),
        },
      },
    },
  },
};
