import { OpenApiGeneratorV31, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { typeCountRequestDoc } from "@/api/count/types.ts";
import { bioProjectDetailRequestDoc } from "@/api/detail/bioProject.ts";
import { allEntryListRequestDoc } from "@/api/entries/all.ts";
import { BioProjectListRequestDoc } from "@/api/entries/bioProject.ts";
import { bioSampleListRequestDoc } from "@/api/entries/bioSample.ts";

export const registry = new OpenAPIRegistry();
registry.registerPath(allEntryListRequestDoc);
registry.registerPath(BioProjectListRequestDoc);
registry.registerPath(bioSampleListRequestDoc);
registry.registerPath(bioProjectDetailRequestDoc);
registry.registerPath(typeCountRequestDoc);

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
