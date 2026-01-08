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
  dbXref: z.array(xrefSchema),
  downloadUrl: z.array(downloadUrlSchema).nullable(),
  properties: z.unknown(),
});
export type BaseDetailResponse = z.infer<typeof baseDetailResponseSchema>;
