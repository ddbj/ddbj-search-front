import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseEntryListRequestParamsSchema, entryListResponseSchema } from "@/api/entries/base.ts";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioSampleListRequestParamsShape = {};
const bioSampleListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...bioSampleListRequestParamsShape,
});
export type BiosampleListRequestParams = z.infer<typeof bioSampleListRequestParamsSchema>;

export const bioSampleListRequestDoc: RouteConfig = {
  path: API_PATH_BIOSAMPLE_LIST,
  method: "get",
  summary: "BioSample list",
  tags: [tags.searchResultList],
  request: {
    params: bioSampleListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema,
        },
      },
    },
  },
};
