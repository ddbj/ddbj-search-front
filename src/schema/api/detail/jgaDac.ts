import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/schema/api/detail/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_JGA_DAC_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const jgaDacDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaDacDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("jga-dac"),
});
export type JgaDacDetailResponse = z.infer<typeof jgaDacDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_JGA_DAC_LIST, "openAPI");
export const jgaDacDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
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
