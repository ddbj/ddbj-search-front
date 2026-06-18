import type { FC } from "react";
import { sanitizeHTML } from "@/utils/sanitizeHTML.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";

type Props = {
  term: string;
  value: string | null | undefined;
};

export const SanitizedRow: FC<Props> = ({ value, term }) => {
  const displayValue = sanitizeHTML(value?.trim());

  if (!displayValue) {
    return null;
  }

  return <InfoListItem term={term}>{displayValue}</InfoListItem>;
};
