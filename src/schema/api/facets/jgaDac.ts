import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { jgaDacListRequestParamsShape } from "@/schema/api/entries/jgaDac.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_JGA_DAC_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const jgaDacFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...jgaDacListRequestParamsShape,
});
export type JgaDacFacetListRequestParams = z.infer<typeof jgaDacFacetListRequestParamsSchema>;

const jgaDacFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add jgaDacFacetSpecificFields here
});
export type JgaDacFacetListResponse = z.infer<typeof jgaDacFacetListResponseSchema>;

export const jgaDacFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_DAC_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_DAC_FACET_LIST),
  description: "facets list for requesting JGA DAC entries",
  tags: [tags.facetList],
  request: {
    query: jgaDacFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: jgaDacFacetListResponseSchema,
        },
      },
    },
  },
};
