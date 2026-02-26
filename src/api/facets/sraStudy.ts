import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { sraStudyListRequestParamsShape } from "@/api/entries/sraStudy.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_SRA_STUDY_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraStudyFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraStudyListRequestParamsShape,
});
export type SraStudyFacetListRequestParams = z.infer<typeof sraStudyFacetListRequestParamsSchema>;

const sraStudyFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add sraStudyFacetSpecificFields here
});
export type SraStudyFacetListResponse = z.infer<typeof sraStudyFacetListResponseSchema>;

export const sraStudyFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_STUDY_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_STUDY_FACET_LIST),
  description: "facets list for requesting SRA Study entries",
  tags: [tags.facetList],
  request: {
    query: sraStudyFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: sraStudyFacetListResponseSchema,
        },
      },
    },
  },
};
