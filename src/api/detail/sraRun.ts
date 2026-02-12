import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_RUN_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraRunDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraRunDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-run"),
});

export type SraRunDetailResponse = z.infer<typeof sraRunDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_SRA_RUN_LIST, "openAPI");
export const sraRunDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
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
