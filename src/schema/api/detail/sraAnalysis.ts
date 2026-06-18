import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/schema/api/detail/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import {
  addIdentifierToPath,
  API_PATH_SRA_ANALYSIS_LIST,
  omitBaseApiPath,
} from "@/schema/api/paths.ts";

const sraAnalysisDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraAnalysisDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-analysis"),
  analysisType: z.string().nullable(),
});
export type SraAnalysisDetailResponse = z.infer<typeof sraAnalysisDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_SRA_ANALYSIS_LIST, "openAPI");
export const sraAnalysisDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "SRA Analysis detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraAnalysisDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraAnalysisDetailResponseSchema,
        },
      },
    },
  },
};
