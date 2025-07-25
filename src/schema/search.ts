import * as z from "zod";

const dateRangeSchema = z.object({
  start: z.iso.date(),
  end: z.iso.date(),
});
export type DateRangeSchemaType = z.infer<typeof dateRangeSchema>;

export const generalSearchSchema = z.object({
  types: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  datePublished: dateRangeSchema.optional(),
  dateUpdated: dateRangeSchema.optional(),
});
export type GeneralSearchSchemaType = z.infer<typeof generalSearchSchema>;
const keyOfSchema = generalSearchSchema.keyof();
type GeneralSearchSchemaKey = z.infer<typeof keyOfSchema>;
export const isGeneralSearchKey = (x: unknown): x is GeneralSearchSchemaKey =>
  keyOfSchema.safeParse(x).success;

export const bioprojectSchema = z
  .object({
    organization: z.string().optional(),
    publication: z.string().optional(),
    grant: z.string().optional(),
  })
  .and(generalSearchSchema);

export type BioprojectSchemaType = z.infer<typeof bioprojectSchema>;

const allSchemas = generalSearchSchema.and(bioprojectSchema);
export type SearchSchemaType = z.infer<typeof allSchemas>;
export type SearchSchemaKey = keyof SearchSchemaType;
