import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_SAMPLE_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraSampleDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraSampleDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("sra-sample"),
  });

export const sraSampleDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_SRA_SAMPLE_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_SRA_SAMPLE_LIST)}:identifier`,
  description: "SRA Sample detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraSampleDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraSampleDetailResponseSchema,
        },
      },
    },
  },
};
