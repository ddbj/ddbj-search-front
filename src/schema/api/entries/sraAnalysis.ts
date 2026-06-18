import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_ANALYSIS_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const sraAnalysisListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const sraAnalysisListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraAnalysisListRequestParamsShape,
});
export type SraAnalysisListRequestParams = z.infer<typeof sraAnalysisListRequestParamsSchema>;

export const sraAnalysisListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_ANALYSIS_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_ANALYSIS_LIST),
  description: "SRA Analysis list",
  tags: [tags.searchResultList],
  request: {
    query: sraAnalysisListRequestParamsSchema,
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
                .extend({ type: z.literal("sra-analysis") }),
            ),
          }),
        },
      },
    },
  },
};
