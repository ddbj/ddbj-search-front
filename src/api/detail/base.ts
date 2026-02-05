import { z } from "zod";
import {
  downloadUrlSchema,
  organismSchema,
  statusSchema,
  visibilitySchema,
  xrefSchema,
} from "@/api/components.ts";

export const baseDetailRequestSchema = z.object({
  identifier: z.string(),
});
export type BaseDetailRequestParams = z.infer<typeof baseDetailRequestSchema>;

export const baseDetailResponseSchema = z.object({
  identifier: z.string(),
  dateCreated: z.string().nullable(),
  dateModified: z.string().nullable(),
  datePublished: z.string().nullable(),
  title: z.string(),
  organism: organismSchema.nullable(),
  description: z.string().nullable(),
  type: z.string(),
  visibility: visibilitySchema,
  status: statusSchema,
  dbXrefs: z.array(xrefSchema).openapi({
    description:
      "To handle entries with a large number of refs, loaded refs are caped at n. <br> `dbXrefsCount` holds the total ref count in the DB, so compare as needed and fetch additional refs (refs-only) when required.",
  }),
  dbXrefsCount: z.record(z.string(), z.number()).openapi({
    example: { bioproject: 1, biosample: 1, "sra-study": 2 },
  }),
  downloadUrl: z.array(downloadUrlSchema).nullable(),
  properties: z.unknown(),
});
export type BaseDetailResponse = z.infer<typeof baseDetailResponseSchema>;
