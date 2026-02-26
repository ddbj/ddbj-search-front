import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { jgaPolicyListRequestParamsShape } from "@/api/entries/jgaPolicy.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_JGA_POLICY_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const jgaPolicyFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...jgaPolicyListRequestParamsShape,
});
export type JgaPolicyFacetListRequestParams = z.infer<typeof jgaPolicyFacetListRequestParamsSchema>;

export const jgaPolicyFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_POLICY_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_POLICY_FACET_LIST),
  description: "facets list for requesting JGA Policy entries",
  tags: [tags.facetList],
  request: {
    query: jgaPolicyFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: baseFacetListResponseSchema,
        },
      },
    },
  },
};
