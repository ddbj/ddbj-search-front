import type { FC } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { sanitizeHTML } from "@/utils/sanitizeHTML.ts";

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
