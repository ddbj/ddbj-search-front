import type { EntryListResponse } from "@/api/entries/base.ts";

export const dummyResponse: EntryListResponse = {
  pagination: {
    page: 1,
    perPage: 10,
    total: 0,
  },
  items: [],
};
