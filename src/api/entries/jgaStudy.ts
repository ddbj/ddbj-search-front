import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_JGA_STUDY_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaStudyListRequestParamsShape = {};
const jgaStudyListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaStudyListRequestParamsShape,
});
export type JgaStudyListRequestParams = z.infer<typeof jgaStudyListRequestParamsSchema>;

export const jgaStudyListRequestDoc: RouteConfig = {
  path: API_PATH_JGA_STUDY_LIST,
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
                .extend({ type: z.literal("jga-study") })
            ),
          }),
        },
      },
    },
  },
};
