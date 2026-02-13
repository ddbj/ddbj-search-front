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

export const downloadUrlSchema = z.object({
  name: z.string(),
  ftpUrl: z.string().optional(),
  type: z.string(),
  url: z.string(),
});
export type DownloadUrl = z.infer<typeof downloadUrlSchema>;

export const visibilitySchema = z
  .enum(["Unrestricted", "Controlled"])
  .describe(`TODO: write description for each Visibility option`);
export type Visibility = z.infer<typeof visibilitySchema>;

export const accessibilityValues = ["public-access", "controlled-access"] as const;
export const accessibilitySchema = z.enum(accessibilityValues);
export type Accessibility = z.infer<typeof accessibilitySchema>;

export const statusValues = ["live", "suppressed", "unpublished"] as const;
export const statusSchema = z.enum(statusValues);
export type Status = z.infer<typeof statusSchema>;
