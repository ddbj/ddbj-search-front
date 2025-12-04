import { z } from "zod";
import { booleanStrings, tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_BIOPROJECT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioprojectListRequestParamsShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.enum(booleanStrings).optional(),
};
const bioProjectListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...bioprojectListRequestParamsShape,
});
export type BioProjectListRequestParams = z.infer<typeof bioProjectListRequestParamsSchema>;

export const bioProjectListRequestDoc: RouteConfig = {
  path: API_PATH_BIOPROJECT_LIST,
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
                .extend({ type: z.literal("bioproject") })
            ),
          }),
        },
      },
    },
  },
};
