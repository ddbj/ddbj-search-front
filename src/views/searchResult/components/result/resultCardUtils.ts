import type { EntryListResponse } from "@/api/entries/base.ts";
import { getEntryTitle } from "@/lib/entry/getEntryTitle.ts";
import { formatToDateStr } from "@/lib/formatting/dateTime.ts";
import type { ResultCardProps } from "./ResultCard.tsx";

export const parseResultCardProps = (res: EntryListResponse["items"][0]): ResultCardProps => {
  const updatedAt = res.dateModified ? formatToDateStr(res.dateModified) : null;
  const submittedAt = res.dateCreated ? formatToDateStr(res.dateCreated) : null;
  const publishedAt = res.datePublished ? formatToDateStr(res.datePublished) : null;
  return {
    title: getEntryTitle(res),
    id: res.identifier,
    type: res.type,
    relations: res.dbXrefsCount,
    accessibility: res.accessibility,
    updatedAt,
    submittedAt,
    publishedAt,
  };
};
