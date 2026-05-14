import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { metaboBankListRequestParamsShape } from "@/api/entries/metaboBank.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_METABOBANK_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";

const metaboBankFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...metaboBankListRequestParamsShape,
});
export type MetaboBankFacetListRequestParams = z.infer<
  typeof metaboBankFacetListRequestParamsSchema
>;

const metaboBankFacetListResponseSchema = baseFacetListResponseSchema.extend({});
export type MetaboBankFacetListResponse = z.infer<typeof metaboBankFacetListResponseSchema>;

export const metaboBankFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_METABOBANK_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_METABOBANK_FACET_LIST),
  description: "facets list for requesting MetaboBank entries",
  tags: [tags.facetList],
  request: {
    query: metaboBankFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: metaboBankFacetListResponseSchema,
        },
      },
    },
  },
};
