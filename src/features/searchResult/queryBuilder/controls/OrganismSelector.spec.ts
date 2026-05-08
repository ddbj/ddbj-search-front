import { describe, expect, it } from "vitest";
import type { FacetItem } from "@/api/facets/base.ts";
import { __TEST__ORGANISM_SELECTOR } from "@/features/searchResult/queryBuilder/controls/OrganismSelector.tsx";

const { filterOrganismItems, getOrganismItemLabel, shouldClearSelectedOrganism } =
  __TEST__ORGANISM_SELECTOR;

const items: FacetItem[] = [
  { value: "562", count: 1232567, label: "Escherichia coli" },
  { value: "9606", count: 2345, label: "Homo sapiens" },
  { value: "3702", count: 1200 },
];

describe("filterOrganismItems", () => {
  it("returns all items when the filter value is empty", () => {
    expect(filterOrganismItems(items, " ")).toEqual(items);
  });

  it("filters items by label", () => {
    expect(filterOrganismItems(items, "coli")).toEqual([items[0]]);
  });

  it("filters items by value", () => {
    expect(filterOrganismItems(items, "3702")).toEqual([items[2]]);
  });
});

describe("getOrganismItemLabel", () => {
  it("uses label when present", () => {
    expect(getOrganismItemLabel(items[0])).toBe("Escherichia coli (1,232,567)");
  });

  it("falls back to value when label is absent", () => {
    expect(getOrganismItemLabel(items[2])).toBe("3702 (1,200)");
  });
});

describe("shouldClearSelectedOrganism", () => {
  it("clears the selected organism when an active filter excludes it", () => {
    const filteredItems = filterOrganismItems(items, "Homo");

    expect(shouldClearSelectedOrganism(filteredItems, "562", "Homo")).toBe(true);
  });

  it("keeps the selected organism when an active filter includes it", () => {
    const filteredItems = filterOrganismItems(items, "coli");

    expect(shouldClearSelectedOrganism(filteredItems, "562", "coli")).toBe(false);
  });

  it("keeps the selected organism when the filter is empty", () => {
    expect(shouldClearSelectedOrganism([], "562", "")).toBe(false);
  });
});
