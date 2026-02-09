import * as z from "zod";

export const paginationShape = {
  page: z.number().optional(),
  perPage: z.number().optional(),
} as const;
//
export const baseSearchSchema = z.object({
  keywords: z.array(z.string()).optional(),
  datePublishedFrom: z.string().optional(),
  datePublishedTo: z.string().optional(),
  dateModifiedFrom: z.string().optional(),
  dateModifiedTo: z.string().optional(),
});
export type BaseSearchParams = z.infer<typeof baseSearchSchema>;
const baseSearchKeySchema = baseSearchSchema.keyof();
export type BaseSearchKey = z.infer<typeof baseSearchKeySchema>;
export const isBaseSearchKey = (x: unknown): x is BaseSearchKey => {
  return baseSearchKeySchema.safeParse(x).success;
};
