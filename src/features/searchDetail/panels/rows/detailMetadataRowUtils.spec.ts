import { describe, expect, it } from "vitest";
import type { Xref } from "@/api/detail/base.ts";
import {
  formatDetailMetadataPackage,
  normalizeDetailMetadataRows,
  type DetailMetadataRow,
} from "./detailMetadataRowUtils.ts";

const derivedFrom: Xref[] = [
  {
    identifier: "SAMN000001",
    type: "biosample",
    url: "https://ddbj.nig.ac.jp/search/entry/biosample/SAMN000001",
  },
];

describe("normalizeDetailMetadataRows", () => {
  it("returns displayable rows for representative additional metadata", () => {
    const rows: DetailMetadataRow[] = [
      { kind: "string", term: "Center Name", value: "DDBJ" },
      { kind: "stringArray", term: "Keywords", value: ["genome", "metagenome"] },
      { kind: "package", term: "Package", value: { displayName: "MIGS", name: "migs" } },
      { kind: "xrefArray", term: "Derived From", value: derivedFrom },
    ];

    expect(normalizeDetailMetadataRows(rows)).toEqual([
      { kind: "text", term: "Center Name", value: "DDBJ" },
      { kind: "text", term: "Keywords", value: "genome, metagenome" },
      { kind: "text", term: "Package", value: "MIGS (migs)" },
      { kind: "xrefs", term: "Derived From", value: derivedFrom },
    ]);
  });

  it("hides null, undefined, empty strings, and empty arrays", () => {
    const rows: DetailMetadataRow[] = [
      { kind: "string", term: "Null String", value: null },
      { kind: "string", term: "Undefined String", value: undefined },
      { kind: "string", term: "Empty String", value: "" },
      { kind: "string", term: "Blank String", value: "   " },
      { kind: "stringArray", term: "Empty Array", value: [] },
      { kind: "stringArray", term: "Blank Array", value: ["", "  "] },
      { kind: "xrefArray", term: "Empty Xrefs", value: [] },
      { kind: "package", term: "Empty Package", value: { displayName: "", name: null } },
    ];

    expect(normalizeDetailMetadataRows(rows)).toEqual([]);
  });
});

describe("formatDetailMetadataPackage", () => {
  it("uses displayName and name when both exist", () => {
    expect(formatDetailMetadataPackage({ displayName: "Human", name: "human" })).toBe(
      "Human (human)",
    );
  });

  it("uses the existing value when only displayName or name exists", () => {
    expect(formatDetailMetadataPackage({ displayName: "Human", name: null })).toBe("Human");
    expect(formatDetailMetadataPackage({ displayName: null, name: "human" })).toBe("human");
  });
});
