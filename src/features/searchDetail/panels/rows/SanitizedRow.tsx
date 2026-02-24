import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { sanitizeHTML } from "@/utils/sanitizeHTML.ts";
import type { FC } from "react";

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
