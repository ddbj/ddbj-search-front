import { z } from "zod";
import {
  distributionSchema,
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
  distribution: z.array(distributionSchema),
  dbXref: z.array(xrefSchema),
  properties: z.unknown(),
});
export type BaseDetailResponse = z.infer<typeof baseDetailResponseSchema>;
