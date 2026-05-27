import { describe, expect, it } from "vitest";
import type { FacetItem } from "@/api/facets/base.ts";
import { __TEST__ORGANISM_SELECTOR } from "@/features/searchResult/queryBuilder/controls/OrganismSelector.tsx";

const { getOrganismItemLabel, normalizeTaxIdInput } = __TEST__ORGANISM_SELECTOR;

const items: FacetItem[] = [
  { value: "562", count: 1232567, label: "Escherichia coli" },
  { value: "9606", count: 2345, label: "Homo sapiens" },
  { value: "3702", count: 1200 },
];

describe("getOrganismItemLabel", () => {
  it("uses label when present", () => {
    expect(getOrganismItemLabel(items[0])).toBe("Escherichia coli (1,232,567)");
  });

  it("falls back to value when label is absent", () => {
    expect(getOrganismItemLabel(items[2])).toBe("3702 (1,200)");
  });
});

describe("normalizeTaxIdInput", () => {
  it("trims surrounding spaces", () => {
    expect(normalizeTaxIdInput(" 562 ")).toBe("562");
  });

  it("returns null when the input is blank", () => {
    expect(normalizeTaxIdInput(" ")).toBeNull();
  });
});
