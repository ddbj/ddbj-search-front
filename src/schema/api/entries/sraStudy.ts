import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_STUDY_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const sraStudyListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const sraStudyListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraStudyListRequestParamsShape,
});
export type SraStudyListRequestParams = z.infer<typeof sraStudyListRequestParamsSchema>;

export const sraStudyListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_STUDY_LIST),
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
                .extend({ type: z.literal("sra-study") }),
            ),
          }),
        },
      },
    },
  },
};
