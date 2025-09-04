import { OpenApiGeneratorV31, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { bioProjectEntriesDoc } from "@/api/searchResult/bioProject.ts";
import { bioSampleEntriesDoc } from "@/api/searchResult/bioSample.ts";
import { allEntriesDoc } from "@/api/searchResult/entries.ts";

export const registry = new OpenAPIRegistry();
registry.registerPath(allEntriesDoc);
registry.registerPath(bioProjectEntriesDoc);
registry.registerPath(bioSampleEntriesDoc);

export const getDocs = () => {
  const generator = new OpenApiGeneratorV31(registry.definitions);
  return generator.generateDocument({
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
};
