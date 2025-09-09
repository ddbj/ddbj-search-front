import type { EntryListResponse } from "@/api/entries/base.ts";

export const dummyResponse: EntryListResponse = {
  page: 1,
  perPage: 10,
  total: 0,
  took: 8,
  items: [],
};
