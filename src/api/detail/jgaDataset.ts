import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_JGA_DATASET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaDatasetDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaDatasetDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("jga-dataset"),
  });

export const jgaDatasetDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_JGA_DATASET_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_JGA_DATASET_LIST)}:identifier`,
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
