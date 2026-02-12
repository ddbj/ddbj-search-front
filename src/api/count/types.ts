import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { allEntryListRequestParamSchema } from "@/api/entries/all.ts";
import { API_PATH_TYPE_COUNT, omitBaseApiPath } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const countTypesResponseSchema = z.object({}).extend(
  Object.keys(dbTypes).reduce<Record<string, z.ZodNumber>>((acc, val) => {
    acc[val] = z.number();
    return acc;
  }, {})
);

const countTypesRequestParamsSchema = allEntryListRequestParamSchema.omit({
  page: true,
  perPage: true,
  types: true,
});

export type CountTypesRequestParams = z.infer<typeof countTypesRequestParamsSchema>;
export type CountTypesResponse = z.infer<typeof countTypesResponseSchema>;

export const typeCountRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_TYPE_COUNT),
  method: "get",
  summary: omitBaseApiPath(API_PATH_TYPE_COUNT),
  tags: [tags.count],
  request: {
    query: countTypesRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: countTypesResponseSchema,
        },
      },
    },
  },
};
