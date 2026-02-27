import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SearchDetailResponse } from "@/api/types.ts";

type EntryData = EntryListResponse["items"][number] | SearchDetailResponse;

export const getEntryTitle = (data: EntryData): string => {
  return data.title ?? data.name ?? data.description?.substring(0, 60) ?? "N/A";
};
