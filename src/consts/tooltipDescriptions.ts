import type { AccessibilityValue, StatusValue } from "@/api/consts.ts";

export const statusTooltipDescriptions: Record<StatusValue, string> = {
  public: "Searchable by accession number and keywords",
  suppressed: "Searchable only by accession number",
  withdrawn: "Unpublished data (previously public)",
  private: "Unpublished data",
};

// Withdrawn and Private entries should not be shown on detail pages, so they are omitted from the tooltip list.
export const visibleStatusTooltipValues = [
  "public",
  "suppressed",
] as const satisfies readonly StatusValue[];

export const accessibilityTooltipDescriptions: Record<AccessibilityValue, string> = {
  "public-access": "Publicly available data",
  "controlled-access": "Restricted access data required an application to use the dataset",
};

export const visibleAccessibilityTooltipValues = [
  "public-access",
  "controlled-access",
] as const satisfies readonly AccessibilityValue[];
