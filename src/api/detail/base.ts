import { z } from "zod";

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
  organism: z.string().nullable(),
  description: z.string().nullable(),
  type: z.string(),
});
