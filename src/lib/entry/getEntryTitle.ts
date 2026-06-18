import type { EntryListResponse } from "@/schema/api/entries/base.ts";
import type { SearchDetailResponse } from "@/schema/api/types.ts";

type EntryData = EntryListResponse["items"][number] | SearchDetailResponse;

export const getEntryTitle = (data: EntryData): string => {
  return data.title ?? data.name ?? data.description?.substring(0, 60) ?? data.identifier;
};
