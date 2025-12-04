import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_SRA_ANALYSIS_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraAnalysisListRequestParamsShape = {};
const sraAnalysisListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraAnalysisListRequestParamsShape,
});
export type SraAnalysisListRequestParams = z.infer<typeof sraAnalysisListRequestParamsSchema>;

export const sraAnalysisListRequestDoc: RouteConfig = {
  path: API_PATH_SRA_ANALYSIS_LIST,
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
                .extend({ type: z.literal("sra-analysis") })
            ),
          }),
        },
      },
    },
  },
};
