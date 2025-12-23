import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_JGA_DATASET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaDatasetDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaDatasetDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("jga-dataset"),
});

export type JgaDatasetDetailResponse = z.infer<typeof jgaDatasetDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_JGA_DATASET_LIST, "openAPI");
export const jgaDatasetDetailRequestDoc: RouteConfig = {
  path,
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
