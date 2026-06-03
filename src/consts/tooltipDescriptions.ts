import type { AccessibilityValue, StatusValue } from "@/api/consts.ts";

export const statusTooltipDescriptions: Record<StatusValue, string> = {
  public: "searchable by accession number and keywords",
  suppressed: "searchable only by accession number",
  withdrawn: "unpublished data (previously public)",
  private: "unpublished data",
};

// Withdrawn and Private entries should not be shown on detail pages, so they are omitted from the tooltip list.
export const visibleStatusTooltipValues = [
  "public",
  "suppressed",
] as const satisfies readonly StatusValue[];

export const accessibilityTooltipDescriptions: Record<AccessibilityValue, string> = {
  "public-access": "publicly available data",
  "controlled-access": "restricted access data required an application to use the dataset",
};

export const visibleAccessibilityTooltipValues = [
  "public-access",
  "controlled-access",
] as const satisfies readonly AccessibilityValue[];
