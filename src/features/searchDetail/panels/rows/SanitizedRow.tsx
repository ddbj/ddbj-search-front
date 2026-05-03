import type { FC } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { sanitizeHTML } from "@/utils/sanitizeHTML.ts";

type Props = {
  term: string;
  value: string | null | undefined;
};

export const SanitizedRow: FC<Props> = ({ value, term }) => {
  if (!value) {
    return null;
  }
  return <InfoListItem term={term}>{sanitizeHTML(value)}</InfoListItem>;
};
