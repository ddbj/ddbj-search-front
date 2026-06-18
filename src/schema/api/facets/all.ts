import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { allEntryListRequestParamsShape } from "@/schema/api/entries/all.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_ALL_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const allFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  // add allFacetSpecificFields here
  ...allEntryListRequestParamsShape,
});
export type AllFacetListRequestParams = z.infer<typeof allFacetListRequestParamsSchema>;
//
const allFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add allFacetSpecificFields here
});
export type AllFacetListResponse = z.infer<typeof allFacetListResponseSchema>;

export const allFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_ALL_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_ALL_FACET_LIST),
  description: "facets list for requesting all entries",
  tags: [tags.facetList],
  request: {
    query: allFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: allFacetListResponseSchema,
        },
      },
    },
  },
};
