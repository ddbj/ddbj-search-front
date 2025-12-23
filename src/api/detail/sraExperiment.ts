import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_EXPERIMENT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraExperimentDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraExperimentDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-experiment"),
});

export type SraExperimentDetailResponse = z.infer<typeof sraExperimentDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_SRA_EXPERIMENT_LIST, "openAPI");

export const sraExperimentDetailRequestDoc: RouteConfig = {
  path,
  method: "get",
  summary: omitBaseApiPath(path),
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
