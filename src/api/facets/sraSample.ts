import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { sraSampleListRequestParamsShape } from "@/api/entries/sraSample.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { API_PATH_SRA_SAMPLE_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";

const sraSampleFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraSampleListRequestParamsShape,
});
export type SraSampleFacetListRequestParams = z.infer<typeof sraSampleFacetListRequestParamsSchema>;

const sraSampleFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add sraSampleFacetSpecificFields here
});
export type SraSampleFacetListResponse = z.infer<typeof sraSampleFacetListResponseSchema>;

export const sraSampleFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_SAMPLE_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_SAMPLE_FACET_LIST),
  description: "facets list for requesting SRA Sample entries",
  tags: [tags.facetList],
  request: {
    query: sraSampleFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: sraSampleFacetListResponseSchema,
        },
      },
    },
  },
};
