import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_SRA_EXPERIMENT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraExperimentListRequestParamsShape = {};
const sraExperimentListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraExperimentListRequestParamsShape,
});
export type SraExperimentListRequestParams = z.infer<typeof sraExperimentListRequestParamsSchema>;

export const sraExperimentListRequestDoc: RouteConfig = {
  path: API_PATH_SRA_EXPERIMENT_LIST,
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
                .extend({ type: z.literal("sra-experiment") })
            ),
          }),
        },
      },
    },
  },
};
