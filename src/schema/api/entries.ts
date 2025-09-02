import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

export const booleanStrings = ["TRUE", "FALSE"] as const;
export type BooleanString = (typeof booleanStrings)[number];

extendZodWithOpenApi(z);

export const EntriesApiResponseSchema = z.object({
  page: z.number().openapi({ example: 1 }),
  perPage: z.number().openapi({ example: 10 }),
  total: z.number().openapi({ example: 10000 }),
  items: z.array(
    z.object({
      identifier: z.string(),
      type: z.string().openapi({ example: "bioproject" }),
      title: z.string().openapi({ example: "Draparnaldia sp. CCAC 6921, genomic data." }),
      dbXrefs: z.record(z.string(), z.number()).openapi({
        example: { bioproject: 1, biosample: 1, "sra-study": 2 },
      }),
      datePublished: z.string().openapi({ example: "2013-05-31" }),
    })
  ),
});
export type EntriesApiResponse = z.infer<typeof EntriesApiResponseSchema>;

const baseEntriesApiParamSchema = z.object({
  page: z.string().optional(),
  perPage: z.string().optional(),
  keywords: z.string().optional(),
  datePublished: z.string().optional(),
  dateUpdated: z.string().optional(),
  // sortBy: z.string().optional(),
  // sortOrder: z.enum(["asc", "desc"]).optional(),
});

const allEntriesApiParamShape = {
  types: z.string().optional(),
};
export const allEntriesApiParamSchema = baseEntriesApiParamSchema.extend({
  ...allEntriesApiParamShape,
});
export type AllEntriesApiParams = z.infer<typeof allEntriesApiParamSchema>;
export type AllEntriesApiParamKeys = keyof AllEntriesApiParams;

const bioprojectEntriesApiParamShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.enum(booleanStrings).optional(),
};
export const bioProjectEntriesApiParamSchema = baseEntriesApiParamSchema.extend({
  ...bioprojectEntriesApiParamShape,
});
export type BioProjectEntriesApiParams = z.infer<typeof bioProjectEntriesApiParamSchema>;
export type BioProjectEntriesApiParamKeys = keyof BioProjectEntriesApiParams;

const anyEntriesApiParamSchema = baseEntriesApiParamSchema.extend({
  ...allEntriesApiParamShape,
  ...bioprojectEntriesApiParamShape,
});
export type AnyEntriesApiParams = z.infer<typeof anyEntriesApiParamSchema>;
export type AnyEntriesApiParamKeys = keyof AnyEntriesApiParams;
