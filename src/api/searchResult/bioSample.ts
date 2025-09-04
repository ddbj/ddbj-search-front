import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { API_PATH_BIOSAMPLES } from "@/api/paths.ts";
import { baseEntriesParamSchema, EntriesResponseSchema } from "@/api/searchResult/entries.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const biosampleEntriesApiParamsShape = {};
export const bioSampleEntriesApiParamSchema = baseEntriesParamSchema.extend({
  ...biosampleEntriesApiParamsShape,
});
export type BiosampleEntriesApiParams = z.infer<typeof bioSampleEntriesApiParamSchema>;
export type BiosampleEntriesApiParamKeys = keyof BiosampleEntriesApiParams;

export const bioSampleEntriesDoc: RouteConfig = {
  path: API_PATH_BIOSAMPLES,
  method: "get",
  summary: "BioSamples",
  tags: [tags.searchResultList],
  request: {
    params: bioSampleEntriesApiParamSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: EntriesResponseSchema,
        },
      },
    },
  },
};
