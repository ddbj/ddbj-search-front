import {
  extendZodWithOpenApi,
  OpenApiGeneratorV31,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { API_PATH_BIOPROJECTS, API_PATH_BIOSAMPLES, API_PATH_SEARCH_ALL } from "@/consts/api.ts";
import {
  allEntriesApiParamSchema,
  bioProjectEntriesApiParamSchema,
  bioSampleEntriesApiParamSchema,
  EntriesApiResponseSchema,
} from "@/schema/api/entries.ts";

extendZodWithOpenApi(z);

const tags = {
  searchResultList: "search result list",
};

export const registry = new OpenAPIRegistry();

registry.registerPath({
  path: API_PATH_SEARCH_ALL,
  method: "get",
  summary: "All entries",
  tags: [tags.searchResultList],
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
  path: API_PATH_BIOPROJECTS,
  method: "get",
  summary: "BioProjects",
  tags: [tags.searchResultList],
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

registry.registerPath({
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
