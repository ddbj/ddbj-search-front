import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { jgaStudyListRequestParamsShape } from "@/api/entries/jgaStudy.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_JGA_STUDY_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const jgaStudyFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...jgaStudyListRequestParamsShape,
});
export type JgaStudyFacetListRequestParams = z.infer<typeof jgaStudyFacetListRequestParamsSchema>;

export const jgaStudyFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_STUDY_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_STUDY_FACET_LIST),
  description: "facets list for requesting JGA Study entries",
  tags: [tags.facetList],
  request: {
    query: jgaStudyFacetListRequestParamsSchema,
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
