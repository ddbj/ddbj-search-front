import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { sraRunListRequestParamsShape } from "@/schema/api/entries/sraRun.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_RUN_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const sraRunFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraRunListRequestParamsShape,
});
export type SraRunFacetListRequestParams = z.infer<typeof sraRunFacetListRequestParamsSchema>;

const sraRunFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add sraRunFacetSpecificFields here
});
export type SraRunFacetListResponse = z.infer<typeof sraRunFacetListResponseSchema>;

export const sraRunFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_RUN_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_RUN_FACET_LIST),
  description: "facets list for requesting SRA Run entries",
  tags: [tags.facetList],
  request: {
    query: sraRunFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: sraRunFacetListResponseSchema,
        },
      },
    },
  },
};
