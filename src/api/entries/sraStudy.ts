import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_SRA_STUDY_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraStudyListRequestParamsShape = {};
const sraStudyListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraStudyListRequestParamsShape,
});
export type SraStudyListRequestParams = z.infer<typeof sraStudyListRequestParamsSchema>;

export const sraStudyListRequestDoc: RouteConfig = {
  path: API_PATH_SRA_STUDY_LIST,
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_STUDY_LIST),
  description: "SRA Study list",
  tags: [tags.searchResultList],
  request: {
    query: sraStudyListRequestParamsSchema,
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
                .extend({ type: z.literal("sra-study") })
            ),
          }),
        },
      },
    },
  },
};
