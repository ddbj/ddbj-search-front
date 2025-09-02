import {
  extendZodWithOpenApi,
  OpenApiGeneratorV31,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { API_PATH_BIOPROJECTS, API_PATH_SEARCH_ALL } from "@/consts/api.ts";
import {
  allEntriesApiParamSchema,
  bioProjectEntriesApiParamSchema,
  EntriesApiResponseSchema,
} from "@/schema/api/entries.ts";

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

registry.registerPath({
  method: "get",
  path: API_PATH_SEARCH_ALL,
  request: {
    params: allEntriesApiParamSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: EntriesApiResponseSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: API_PATH_BIOPROJECTS,
  request: {
    params: bioProjectEntriesApiParamSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: EntriesApiResponseSchema,
        },
      },
    },
  },
});

const generator = new OpenApiGeneratorV31(registry.definitions);

export const getDocs = () =>
  generator.generateDocument({
    openapi: "3.1.0",
    info: {
      title: "DDBJ SEARCH API",
      version: "0.0.0",
      // description
    },
    servers: [
      {
        url: "http://localhost:5137",
        description: "Development server",
      },
    ],
  });
