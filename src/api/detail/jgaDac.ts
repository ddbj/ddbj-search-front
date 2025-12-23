import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_JGA_DAC_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaDacDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaDacDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("jga-dac"),
});
export type JgaDacDetailResponse = z.infer<typeof jgaDacDetailResponseSchema>;

export const jgaDacDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_JGA_DAC_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_JGA_DAC_LIST)}:identifier`,
  description: "JGA DAC detail",
  tags: [tags.searchResultDetail],
  request: {
    params: jgaDacDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: jgaDacDetailResponseSchema,
        },
      },
    },
  },
};
