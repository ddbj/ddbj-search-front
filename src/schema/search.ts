import * as z from "zod";
import { dbTypes } from "@/consts.ts";

const dateRangeSchema = z.object({
  from: z.iso.date(),
  to: z.iso.date(),
});

export const globalSearchSchema = z.object({
  types: z.array(z.enum(dbTypes)).optional(),
  keywords: z.array(z.string()).optional(),
  datePublished: dateRangeSchema.optional(),
  dateUpdated: dateRangeSchema.optional(),
});
export type GlobalSearchSchemaType = z.infer<typeof globalSearchSchema>;
