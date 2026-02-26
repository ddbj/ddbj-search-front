import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { sraSubmissionListRequestParamsShape } from "@/api/entries/sraSubmission.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_SRA_SUBMISSION_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const sraSubmissionFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraSubmissionListRequestParamsShape,
});
export type SraSubmissionFacetListRequestParams = z.infer<
  typeof sraSubmissionFacetListRequestParamsSchema
>;

export const sraSubmissionFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_SUBMISSION_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_SUBMISSION_FACET_LIST),
  description: "facets list for requesting SRA Submission entries",
  tags: [tags.facetList],
  request: {
    query: sraSubmissionFacetListRequestParamsSchema,
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
