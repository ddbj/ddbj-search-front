import { z } from "zod";
import { booleanStrings, tags } from "@/api/consts.ts";
import { baseEntryListRequestParamsSchema, entryListResponseSchema } from "@/api/entries/base.ts";
import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioprojectListRequestParamsShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.enum(booleanStrings).optional(),
};
const bioProjectListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...bioprojectListRequestParamsShape,
});
export type BioProjectListRequestParams = z.infer<typeof bioProjectListRequestParamsSchema>;

export const BioProjectListRequestDoc: RouteConfig = {
  path: API_PATH_BIOPROJECT_LIST,
  method: "get",
  summary: "BioProject list",
  tags: [tags.searchResultList],
  request: {
    query: bioProjectListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema,
        },
      },
    },
  },
};
