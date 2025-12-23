import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_RUN_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraRunDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraRunDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-run"),
});

export type SraRunDetailResponse = z.infer<typeof sraRunDetailResponseSchema>;

export const sraRunDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_SRA_RUN_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_SRA_RUN_LIST)}:identifier`,
  description: "SRA Run detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraRunDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraRunDetailResponseSchema,
        },
      },
    },
  },
};
