import * as z from "zod";

const dateRangeSchema = z.object({
  start: z.iso.date(),
  end: z.iso.date(),
});

export const globalSearchSchema = z.object({
  types: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  datePublished: dateRangeSchema.optional(),
  dateUpdated: dateRangeSchema.optional(),
});
export type GlobalSearchSchemaType = z.infer<typeof globalSearchSchema>;
export type DateRangeSchemaType = z.infer<typeof dateRangeSchema>;
