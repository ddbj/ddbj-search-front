import type { FC } from "react";
import { sanitizeHTML } from "@/lib/sanitizing/sanitizeHTML.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";

type Props = {
  term: string;
  value: string[] | null | undefined;
};

export const StringArrayInfoRow: FC<Props> = ({ term, value }) => {
  const displayValue = value
    ?.map((item) => sanitizeHTML(item.trim()))
    .filter((item) => item.length > 0)
    .join(", ");

  if (!displayValue) {
    return null;
  }

  return <InfoListItem term={term}>{displayValue}</InfoListItem>;
};
