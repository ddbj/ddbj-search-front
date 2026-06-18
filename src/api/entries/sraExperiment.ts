import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/api/entries/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { API_PATH_SRA_EXPERIMENT_LIST, omitBaseApiPath } from "@/api/paths.ts";

export const sraExperimentListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const sraExperimentListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraExperimentListRequestParamsShape,
});
export type SraExperimentListRequestParams = z.infer<typeof sraExperimentListRequestParamsSchema>;

export const sraExperimentListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_EXPERIMENT_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_EXPERIMENT_LIST),
  description: "SRA Experiment list",
  tags: [tags.searchResultList],
  request: {
    query: sraExperimentListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema.omit({ items: true }).extend({
            items: z.array(
              entryListItemResponseSchema
                .omit({ type: true })
                .extend({ type: z.literal("sra-experiment") }),
            ),
          }),
        },
      },
    },
  },
};
