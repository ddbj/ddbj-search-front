import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { bioprojectEntriesApiParamShape } from "@/api/searchResult/bioProject.ts";
import { allEntriesParamShape, baseEntriesParamsSchema } from "@/api/searchResult/entries.ts";

extendZodWithOpenApi(z);

const anyEntriesApiParamSchema = baseEntriesParamsSchema.extend({
  ...allEntriesParamShape,
  ...bioprojectEntriesApiParamShape,
});
/**
 * @deprecated
 */
export type AnyEntriesApiParams = z.infer<typeof anyEntriesApiParamSchema>;
/**
 * @deprecated
 */
export type AnyEntriesApiParamKeys = keyof AnyEntriesApiParams;
