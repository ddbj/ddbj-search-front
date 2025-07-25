import * as z from "zod";

export const dateRangeSchema = z.object({
  start: z.string().refine((s) => !isNaN(Date.parse(s)), {
    message: "must be a valid ISO date string",
  }),
  end: z.string().refine((s) => !isNaN(Date.parse(s)), {
    message: "must be a valid ISO date string",
  }),
});
export type SearchDateRange = z.infer<typeof dateRangeSchema>;

export const searchBaseSchema = z.object({
  types: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  datePublished: dateRangeSchema.optional(),
  dateUpdated: dateRangeSchema.optional(),
});
export type SearchBase = z.infer<typeof searchBaseSchema>;
const searchBaseKeySchema = searchBaseSchema.keyof();
export type SearchBaseKey = z.infer<typeof searchBaseKeySchema>;
export const isSearchBaseKey = (x: unknown): x is SearchBaseKey =>
  searchBaseKeySchema.safeParse(x).success;
//

const bioProjectSpecificShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.boolean().optional(),
} as const;

export const bioprojectSchema = searchBaseSchema.extend(bioProjectSpecificShape);
export type BioprojectSearch = z.infer<typeof bioprojectSchema>;

const allResourcesSchemas = searchBaseSchema.extend({ ...bioProjectSpecificShape });
export type AllSearch = z.infer<typeof allResourcesSchemas>;
const allResourcesSchemaKeySchema = allResourcesSchemas.keyof();
export type AllResourcesKey = z.infer<typeof allResourcesSchemaKeySchema>;
export const isAllResourcesKey = (x: unknown): x is AllResourcesKey =>
  allResourcesSchemaKeySchema.safeParse(x).success;
