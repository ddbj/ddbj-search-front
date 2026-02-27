import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const bioProjectSpecificShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.boolean().optional(),
} as const;
export const bioprojectSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...bioProjectSpecificShape,
});
export type BioprojectSearchParams = z.infer<typeof bioprojectSearchSchema>;
export const isBioprojectSearchParams = (x: unknown): x is BioprojectSearchParams => {
  return bioprojectSearchSchema.safeParse(x).success;
};
