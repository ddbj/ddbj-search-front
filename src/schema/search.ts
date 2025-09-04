import * as z from "zod";
import { dbTypeList } from "@/consts/db.ts";

const paginationShape = {
  page: z.number().optional(),
  perPage: z.number().optional(),
} as const;

export const baseSearchSchema = z.object({
  keywords: z.array(z.string()).optional(),
  datePublished: z.string().optional(),
  dateUpdated: z.string().optional(),
});
export type BaseSearchParams = z.infer<typeof baseSearchSchema>;
const baseSearchKeySchema = baseSearchSchema.keyof();
export type BaseSearchKey = z.infer<typeof baseSearchKeySchema>;
export const isBaseSearchKey = (x: unknown): x is BaseSearchKey => {
  return baseSearchKeySchema.safeParse(x).success;
};

const allSearchSpecificShape = {
  types: z.array(z.enum(dbTypeList)).optional(),
};
export const allSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...allSearchSpecificShape,
});
export type AllSearchParams = z.infer<typeof allSearchSchema>;

const bioProjectSpecificShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.boolean().optional(),
} as const;

export const bioprojectSchema = baseSearchSchema.extend(bioProjectSpecificShape);
export type BioprojectSearchParams = z.infer<typeof bioprojectSchema>;

export const anySearchSchemas = baseSearchSchema.extend({
  ...paginationShape,
  ...allSearchSpecificShape,
  ...bioProjectSpecificShape,
});
export type AnySearchParams = z.infer<typeof anySearchSchemas>;
const anySearchKeySchema = anySearchSchemas.keyof();
export type AnySearchParamsKey = z.infer<typeof anySearchKeySchema>;
export const isAnySearchParamsKey = (x: unknown): x is AnySearchParamsKey => {
  return anySearchKeySchema.safeParse(x).success;
};
