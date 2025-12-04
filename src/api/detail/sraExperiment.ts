import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_EXPERIMENT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraExperimentDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraExperimentDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("sra-experiment"),
  });

export const sraExperimentDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_SRA_EXPERIMENT_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_SRA_EXPERIMENT_LIST)}:identifier`,
  description: "SRA Experiment detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraExperimentDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraExperimentDetailResponseSchema,
        },
      },
    },
  },
};
