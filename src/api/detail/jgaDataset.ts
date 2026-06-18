import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_JGA_DATASET_LIST, omitBaseApiPath } from "@/api/paths.ts";

const jgaDatasetDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaDatasetDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("jga-dataset"),
  datasetType: z.array(z.string()),
});

export type JgaDatasetDetailResponse = z.infer<typeof jgaDatasetDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_JGA_DATASET_LIST, "openAPI");
export const jgaDatasetDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "JGA Dataset detail",
  tags: [tags.searchResultDetail],
  request: {
    params: jgaDatasetDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: jgaDatasetDetailResponseSchema,
        },
      },
    },
  },
};
