import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { geaListRequestParamsShape } from "@/schema/api/entries/gea.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_GEA_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const geaFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...geaListRequestParamsShape,
});
export type GeaFacetListRequestParams = z.infer<typeof geaFacetListRequestParamsSchema>;

const geaFacetListResponseSchema = baseFacetListResponseSchema.extend({});
export type GeaFacetListResponse = z.infer<typeof geaFacetListResponseSchema>;

export const geaFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_GEA_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_GEA_FACET_LIST),
  description: "facets list for requesting GEA entries",
  tags: [tags.facetList],
  request: {
    query: geaFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: geaFacetListResponseSchema,
        },
      },
    },
  },
};
