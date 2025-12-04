import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_ANALYSIS_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraAnalysisDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraAnalysisDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-analysis"),
});

export const sraAnalysisDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_SRA_ANALYSIS_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_SRA_ANALYSIS_LIST)}:identifier`,
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
