import { describe, expect, it } from "vitest";
import type { EntryListItemResponse } from "@/api/entries/base.ts";
import { getEntryTitle } from "@/utils/getEntryTitle.ts";

const makeEntry = (overrides: Partial<EntryListItemResponse> = {}): EntryListItemResponse => ({
  identifier: "DRR000001",
  type: "sra-run",
  title: null,
  name: null,
  description: null,
  dbXrefsCount: {},
  accessibility: "public-access",
  datePublished: null,
  dateModified: null,
  dateCreated: null,
  ...overrides,
});

describe("getEntryTitle", () => {
  it("uses title first", () => {
    expect(getEntryTitle(makeEntry({ title: "Primary title", name: "Entry name" }))).toBe(
      "Primary title",
    );
  });

  it("falls back to name", () => {
    expect(getEntryTitle(makeEntry({ name: "Entry name", description: "Entry description" }))).toBe(
      "Entry name",
    );
  });

  it("falls back to the first 60 description characters", () => {
    const description = "a".repeat(61);

    expect(getEntryTitle(makeEntry({ description }))).toBe("a".repeat(60));
  });

  it("falls back to identifier when title fields are missing", () => {
    expect(getEntryTitle(makeEntry({ identifier: "DRR999999" }))).toBe("DRR999999");
  });
});
