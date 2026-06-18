import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/schema/api/detail/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_SRA_EXPERIMENT_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const sraExperimentDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraExperimentDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-experiment"),
  instrumentModel: z.array(z.string()).nullable(),
  libraryLayout: z.string().nullable(),
  librarySelection: z.array(z.string()).nullable(),
  librarySource: z.array(z.string()).nullable(),
  libraryStrategy: z.array(z.string()).nullable(),
  platform: z.string().nullable(),
  libraryName: z.string().nullable(),
  libraryConstructionProtocol: z.string().nullable(),
});

export type SraExperimentDetailResponse = z.infer<typeof sraExperimentDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_SRA_EXPERIMENT_LIST, "openAPI");

export const sraExperimentDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
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
