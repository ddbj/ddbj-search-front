import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { sraRunListRequestParamsShape } from "@/api/entries/sraRun.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_SRA_RUN_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const sraRunFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraRunListRequestParamsShape,
});
export type SraRunFacetListRequestParams = z.infer<typeof sraRunFacetListRequestParamsSchema>;

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
          schema: baseFacetListResponseSchema,
        },
      },
    },
  },
};
