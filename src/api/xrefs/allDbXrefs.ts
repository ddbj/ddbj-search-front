import z from "zod";
import { xrefSchema } from "@/api/components.ts";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_DB_XREF, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const allDbXrefsRequestParamsSchema = baseDetailRequestSchema.extend({});

const allDbXrefsResponseSchema = z.array(xrefSchema);

const path = addIdentifierToPath(API_PATH_DB_XREF, "openAPI");
export const allDbXrefsRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "Retrieve all database cross-references for a given identifier",
  tags: [tags.dbXref],
  request: {
    params: allDbXrefsRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: allDbXrefsResponseSchema,
        },
      },
    },
  },
};
