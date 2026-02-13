import { z } from "zod";
import { booleanStrings, tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_BIOPROJECT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioprojectListRequestParamsShape = {
  organization: z
    .object({
      name: z.string().nullable(),
      organizationType: z.string().nullable(),
      role: z.string().nullable(),
      url: z.string().nullable(),
      abbreviation: z.string().nullable(),
    })
    .nullable(),
  publication: z
    .object({
      id: z.string().nullable(),
      title: z.string().nullable(),
      date: z.string().nullable(),
      Reference: z.string().nullable(),
      url: z.string().nullable(),
      DbType: z.string().nullable(),
      status: z.string().nullable(),
    })
    .nullable(),
  grant: z
    .object({
      id: z.string().nullable(),
      title: z.string().nullable(),
      agency: z.array(
        z.object({
          abbreviation: z.string().nullable(),
          name: z.string().nullable(),
        })
      ),
    })
    .nullable(),
  umbrella: z.enum(booleanStrings).optional(),
};
const bioProjectListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...bioprojectListRequestParamsShape,
});
export type BioProjectListRequestParams = z.infer<typeof bioProjectListRequestParamsSchema>;

export const bioProjectListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_BIOPROJECT_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_BIOPROJECT_LIST),
  description: "BioProject list",
  tags: [tags.searchResultList],
  request: {
    query: bioProjectListRequestParamsSchema,
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
                .extend({ type: z.literal("bioproject") })
            ),
          }),
        },
      },
    },
  },
};
