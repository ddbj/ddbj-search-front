import { z } from "zod";

export const booleanStrings = ["TRUE", "FALSE"] as const;
export type BooleanString = (typeof booleanStrings)[number];

export const EntriesApiResponseSchema = z.object({
  page: z.number(),
  perPage: z.number(),
  total: z.number(),
  items: z.array(
    z.object({
      identifier: z.string(),
      type: z.string(),
      title: z.string(),
      dbXrefs: z.record(z.string(), z.number()),
      datePublished: z.string(),
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
const allEntriesApiParamSchema = baseEntriesApiParamSchema.extend({ ...allEntriesApiParamShape });
export type AllEntriesApiParams = z.infer<typeof allEntriesApiParamSchema>;
export type AllEntriesApiParamKeys = keyof AllEntriesApiParams;

const bioprojectEntriesApiParamShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.enum(booleanStrings).optional(),
};
const bioProjectEntriesApiParamSchema = baseEntriesApiParamSchema.extend({
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
