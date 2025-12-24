import { z } from "zod";
export const organismSchema = z.object({
  identifier: z.string(),
  name: z.string().nullable(),
});
export type Organism = z.infer<typeof organismSchema>;

export const xrefSchema = z.object({
  identifier: z.string(),
  type: z.string(),
  url: z.string(),
});
export type Xref = z.infer<typeof xrefSchema>;

export const distributionSchema = z.object({
  contentUrl: z.string(),
  encodingFormat: z.string(),
  type: z.string(),
});
export type Distribution = z.infer<typeof distributionSchema>;

export const downloadUrlSchema = z.object({
  name: z.string(),
  ftpUrl: z.string(),
  type: z.string(),
  url: z.string(),
});
export type DownloadUrl = z.infer<typeof downloadUrlSchema>;

export const visibilitySchema = z.enum(["Unrestricted", "Controlled"]);
export type Visibility = z.infer<typeof visibilitySchema>;

export const statusSchema = z.enum(["public"]);
export type Status = z.infer<typeof statusSchema>;
