import * as z from "zod";
import { allSearchSpecificShape } from "@/schema/search/all.ts";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";
import { bioProjectSpecificShape } from "@/schema/search/bioProject.ts";
import { bioSampleSpecificShape } from "@/schema/search/bioSample.ts";

export const anySearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...allSearchSpecificShape,
  ...bioProjectSpecificShape,
  ...bioSampleSpecificShape,
});
export type AnySearchParams = z.infer<typeof anySearchSchema>;
const anySearchKeySchema = anySearchSchema.keyof();
export type AnySearchParamsKey = z.infer<typeof anySearchKeySchema>;
export const isAnySearchParamsKey = (x: unknown): x is AnySearchParamsKey => {
  return anySearchKeySchema.safeParse(x).success;
};
