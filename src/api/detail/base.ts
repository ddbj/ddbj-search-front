import { z } from "zod";
import { accessibilityValues, statusValues } from "@/api/consts.ts";
import { extendZod } from "@/utils/extendZod.ts";

extendZod();

export const baseDetailRequestSchema = z.object({
  identifier: z.string(),
});
export type BaseDetailRequestParams = z.infer<typeof baseDetailRequestSchema>;

const XrefSchema = z.object({
  identifier: z.string(),
  type: z.string(),
  url: z.string(),
});

export const baseDetailResponseSchema = z.object({
  identifier: z.string(),
  dateCreated: z.string().nullable(),
  dateModified: z.string().nullable(),
  datePublished: z.string().nullable(),
  title: z.string(),
  organism: z
    .object({
      identifier: z.string(),
      name: z.string().nullable(),
    })
    .nullable(),
  description: z.string().nullable(),
  type: z.string(),
  accessibility: z.enum(accessibilityValues),
  status: z.enum(statusValues),
  dbXrefs: z.array(XrefSchema).nullable().openapi({
    description:
      "To handle entries with a large number of refs, loaded refs are caped at n. <br> `dbXrefsCount` holds the total ref count in the DB, so compare as needed and fetch additional refs (refs-only) when required.",
  }),
  dbXrefsCount: z.record(z.string(), z.number()).openapi({
    example: { bioproject: 1, biosample: 1, "sra-study": 2 },
  }),
  externalLink: z
    .array(
      z.object({
        url: z.string().nullable().optional(),
        label: z.string(),
      })
    )
    .nullable()
    .optional(),
  properties: z.unknown(),
  distribution: z.unknown(),
  // downloadUrl: z.array(
  //   z.object({
  //     name: z.string(),
  //     ftpUrl: z.string().optional(),
  //     type: z.string(),
  //     url: z.string(),
  //   })
  // ),
  isPartOf: z.string(),
  name: z.string().nullable().optional(),
  url: z.unknown(),
  sameAs: z.array(XrefSchema).nullable(),
});
export type BaseDetailResponse = z.infer<typeof baseDetailResponseSchema>;
export type ExternalLink = NonNullable<BaseDetailResponse["externalLink"]>[0];
export type DbXrefsCount = BaseDetailResponse["dbXrefsCount"];
export type Organism = NonNullable<BaseDetailResponse["organism"]>;
export type Xref = NonNullable<BaseDetailResponse["dbXrefs"]>[0];
// export type DownloadUrl = BaseDetailResponse["downloadUrl"];
export type Accessibility = NonNullable<BaseDetailResponse["accessibility"]>;
export type Status = NonNullable<BaseDetailResponse["status"]>;
