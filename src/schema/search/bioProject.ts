import * as z from "zod";
import { bioProjectObjectTypeValues } from "@/api/valueTypes.ts";
import {
  baseSearchSchema,
  grantSearchShape,
  paginationShape,
  publicationSearchShape,
} from "@/schema/search/base.ts";

export const bioProjectSpecificShape = {
  ...publicationSearchShape,
  ...grantSearchShape,
  objectTypes: z.array(z.enum(bioProjectObjectTypeValues)).optional(),
} as const;
export const bioprojectSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...bioProjectSpecificShape,
});
export type BioprojectSearchParams = z.infer<typeof bioprojectSearchSchema>;
export const isBioprojectSearchParams = (x: unknown): x is BioprojectSearchParams => {
  return bioprojectSearchSchema.safeParse(x).success;
};
