import { z } from "zod";

export const booleanStrings = ["true", "false"] as const;
export type BooleanString = (typeof booleanStrings)[number];
export const tags = {
  searchResultList: "search result list",
  searchResultDetail: "search result detail",
  facetList: "facet list",
  count: "count",
  dbXref: "dbXref",
};

export const accessibilityValues = ["public-access", "controlled-access"] as const;
export type AccessibilityValue = (typeof accessibilityValues)[number];
export const accessibilityLabels: Record<AccessibilityValue, string> = {
  "public-access": "Public Access",
  "controlled-access": "Controlled Access",
};
export const getAccessibilityLabels = (str: string) => {
  const result = accessibilityLabels[str as AccessibilityValue];
  return result ?? str;
};
export const statusValues = ["live", "suppressed", "unpublished"] as const;
export type StatusValue = (typeof statusValues)[number];
export const statusLabels: Record<StatusValue, string> = {
  live: "Live",
  suppressed: "Suppressed",
  unpublished: "Unpublished",
};
export const getStatusLabels = (str: string) => {
  const result = statusLabels[str as StatusValue];
  return result ?? str;
};

const organizationSchema = z.object({
  abbreviation: z.string().nullable(),
  name: z.string().nullable(),
  organizationType: z.string().nullable(),
  role: z.string().nullable(),
  url: z.string().nullable(),
});
export const organizationListSchema = z.array(organizationSchema).nullable();
export type Organization = NonNullable<z.infer<typeof organizationListSchema>>[0];

export const sortKeyValues = [
  "dateModified:asc",
  "dateModified:desc",
  "datePublished:asc",
  "datePublished:desc",
];
export type SortKey = (typeof sortKeyValues)[number];
