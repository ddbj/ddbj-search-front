import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_JGA_POLICY_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaPolicyDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaPolicyDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("jga-policy"),
});
export type JgaPolicyDetailResponse = z.infer<typeof jgaPolicyDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_JGA_POLICY_LIST, "openAPI");
export const jgaPolicyDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "JGA Policy detail",
  tags: [tags.searchResultDetail],
  request: {
    params: jgaPolicyDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: jgaPolicyDetailResponseSchema,
        },
      },
    },
  },
};
