import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { bioSampleListRequestParamsShape } from "@/schema/api/entries/bioSample.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_BIOSAMPLE_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const bioSampleFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...bioSampleListRequestParamsShape,
});
export type BioSampleFacetListRequestParams = z.infer<typeof bioSampleFacetListRequestParamsSchema>;

const bioSampleFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add bioSampleFacetSpecificFields here
});
export type BioSampleFacetListResponse = z.infer<typeof bioSampleFacetListResponseSchema>;

export const bioSampleFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_BIOSAMPLE_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_BIOSAMPLE_FACET_LIST),
  description: "facets list for requesting BioSample entries",
  tags: [tags.facetList],
  request: {
    query: bioSampleFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: bioSampleFacetListResponseSchema,
        },
      },
    },
  },
};
