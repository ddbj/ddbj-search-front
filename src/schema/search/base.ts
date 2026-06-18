import * as z from "zod";
import { sortKeyValues } from "@/api/valueTypes.ts";

export const paginationShape = {
  page: z.number().optional(),
  perPage: z.number().optional(),
} as const;

export const publicationSearchShape = {
  publication: z.string().optional(),
} as const;

export const grantSearchShape = {
  grant: z.string().optional(),
} as const;

export type DetailFilterSearchParams = {
  publication?: string;
  grant?: string;
};
export type SearchParamsWithUnsupportedDetailFilters<T> = T & DetailFilterSearchParams;

export const baseSearchSchema = z.object({
  keywords: z.array(z.string()).optional(),
  organism: z.string().optional(),
  organization: z.string().optional(),
  datePublishedFrom: z.string().optional(),
  datePublishedTo: z.string().optional(),
  dateModifiedFrom: z.string().optional(),
  dateModifiedTo: z.string().optional(),
  sort: z.enum(sortKeyValues).optional(),
});
export type BaseSearchParams = z.infer<typeof baseSearchSchema>;
const baseSearchKeySchema = baseSearchSchema.keyof();
export type BaseSearchKey = z.infer<typeof baseSearchKeySchema>;
export const isBaseSearchKey = (x: unknown): x is BaseSearchKey => {
  return baseSearchKeySchema.safeParse(x).success;
};
