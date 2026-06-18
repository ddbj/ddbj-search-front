import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/schema/api/detail/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import {
  addIdentifierToPath,
  API_PATH_JGA_POLICY_LIST,
  omitBaseApiPath,
} from "@/schema/api/paths.ts";

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
