import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  grantRequestParamsShape,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_JGA_STUDY_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const jgaStudyListRequestParamsShape = {
  ...publicationRequestParamsShape,
  ...grantRequestParamsShape,
};
const jgaStudyListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaStudyListRequestParamsShape,
});
export type JgaStudyListRequestParams = z.infer<typeof jgaStudyListRequestParamsSchema>;

export const jgaStudyListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_STUDY_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_STUDY_LIST),
  description: "JGA Study list",
  tags: [tags.searchResultList],
  request: {
    query: jgaStudyListRequestParamsSchema,
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
                .extend({ type: z.literal("jga-study") }),
            ),
          }),
        },
      },
    },
  },
};
