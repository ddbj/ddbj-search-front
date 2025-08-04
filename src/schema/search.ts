import * as z from "zod";
import { dbTypeList, dbTypes } from "@/consts/db.ts";

// const dateRangeSchema = z.object({
//   start: z.string().refine((s) => !isNaN(Date.parse(s)), {
//     message: "must be a valid ISO date string",
//   }),
//   end: z.string().refine((s) => !isNaN(Date.parse(s)), {
//     message: "must be a valid ISO date string",
//   }),
// });
// export type SearchDateRange = z.infer<typeof dateRangeSchema>;

export const baseSearchSchema = z.object({
  types: z.array(z.enum(dbTypeList)).optional(),
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

//

const paginationShape = {
  page: z.number().optional(),
  perPage: z.number().optional(),
} as const;

const bioProjectSpecificShape = {
  organization: z.string().optional(),
  publication: z.string().optional(),
  grant: z.string().optional(),
  umbrella: z.boolean().optional(),
} as const;

export const bioprojectSchema = baseSearchSchema.extend(bioProjectSpecificShape);
export type BioprojectSearchParams = z.infer<typeof bioprojectSchema>;

export const allSearchSchemas = baseSearchSchema.extend({
  ...paginationShape,
  ...bioProjectSpecificShape,
});
export type AllSearchParams = z.infer<typeof allSearchSchemas>;
const allSearchKeySchema = allSearchSchemas.keyof();
export type AllSearchParamsKey = z.infer<typeof allSearchKeySchema>;
export const isAllSearchParamsKey = (x: unknown): x is AllSearchParamsKey => {
  return allSearchKeySchema.safeParse(x).success;
};

type AA = AllSearchParams["types"];
