import { formatToDateStr } from "@/utils/dateTime.ts";
import { getEntryTitle } from "@/utils/getEntryTitle.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { ResultCardProps } from "./ResultCard.tsx";

export const parseResultCardProps = (
  res: EntryListResponse["items"][0],
): ResultCardProps => {
  const updatedAt = res.dateModified ? formatToDateStr(res.dateModified) : null;
  const submittedAt = res.dateCreated ? formatToDateStr(res.dateCreated) : null;
  const publishedAt = res.datePublished ? formatToDateStr(res.datePublished) : null;
  return {
    title: getEntryTitle(res),
    id: res.identifier,
    type: res.type,
    relations: res.dbXrefsCount,
    updatedAt,
    submittedAt,
    publishedAt,
  };
};
