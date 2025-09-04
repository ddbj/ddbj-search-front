import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import { bioprojectEntriesApiParamShape } from "@/api/searchResult/bioProject.ts";
import { allEntriesParamShape, baseEntriesParamSchema } from "@/api/searchResult/entries.ts";

extendZodWithOpenApi(z);

const anyEntriesApiParamSchema = baseEntriesParamSchema.extend({
  ...allEntriesParamShape,
  ...bioprojectEntriesApiParamShape,
});
/**
 * @deprecated
 */
export type AnyEntriesApiParams = z.infer<typeof anyEntriesApiParamSchema>;
export type AnyEntriesApiParamKeys = keyof AnyEntriesApiParams;
