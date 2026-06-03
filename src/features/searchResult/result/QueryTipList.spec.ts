import { describe, expect, it } from "vitest";
import { __QUERY_LISTS_TEST__ } from "@/features/searchResult/result/QueryTipList.tsx";
import { allSearchSchema } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { bioprojectSearchSchema } from "@/schema/search/bioProject.ts";
import { biosampleSearchSchema } from "@/schema/search/bioSample.ts";

const { parseQueryStateToTipList } = __QUERY_LISTS_TEST__;

describe("parseQueryStateToTipList", () => {
  it("should return empty array when initial state", () => {
    const result = parseQueryStateToTipList({});
    expect(result).toEqual([]);
  });

  it("should parse keywords to QueryTipProps array", () => {
    const state: AnySearchParams = {};
    state.keywords = ["human", "cat"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result[0].label.name).toBe("Keyword");
  });

  it("should parse types to QueryTipProps array", () => {
    const state: AnySearchParams = {};
    state.types = ["sra-analysis", "jga-study"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
  });

  it("should parse objectTypes to QueryTipProps array", () => {
    const state: AnySearchParams = {};
    state.objectTypes = ["BioProject", "UmbrellaBioProject"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result[0].label.value).toBe("BioProject");
    expect(result[1].label.value).toBe("Umbrella BioProject");
  });

  it("should parse organism to QueryTipProps array", () => {
    const state: AnySearchParams = {};
    state.organism = "562";
    const result = parseQueryStateToTipList(state);
    expect(result).toHaveLength(1);
    expect(result[0].data).toEqual({ name: "organism", value: "562" });
    expect(result[0].label).toEqual({ name: "Organism", value: "562" });
  });

  it("should parse date ranges to QueryTipProps array", () => {
    const state: AnySearchParams = {};
    state.datePublishedFrom = "2025-07-01";
    state.datePublishedTo = "2025-07-10";
    state.dateModifiedFrom = "2024-08-01";
    state.dateModifiedTo = "2024-08-10";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result.find((o) => o.label.name === "Date First Published")?.label.value).toBe(
      "2025-07-01 | 2025-07-10",
    );
    expect(result.find((o) => o.label.name === "Date Last Published")?.label.value).toBe(
      "2024-08-01 | 2024-08-10",
    );
  });

  it("should trim grant values in QueryTipProps array", () => {
    const state: AnySearchParams = {};
    state.grant = "test grant ";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(1);
    expect(result[0].data.value).toBe("test grant");
  });

  it("should ignore empty grant values", () => {
    const state: AnySearchParams = {};
    state.grant = "";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });

  it("should ignore undefined grant values", () => {
    const state: AnySearchParams = {};
    state.grant = undefined;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });

  it("should not show unsupported all-entry filters after route state sanitization", () => {
    const state = allSearchSchema.parse({
      organization: "DDBJ",
      publication: "Nature",
      grant: "AMED",
    });
    const result = parseQueryStateToTipList(state);

    expect(result.map((tip) => tip.label.name)).toEqual(["Organization"]);
  });

  it("should not show unsupported BioSample filters after route state sanitization", () => {
    const state = biosampleSearchSchema.parse({
      organization: "DDBJ",
      publication: "Nature",
      grant: "AMED",
    });
    const result = parseQueryStateToTipList(state);

    expect(result.map((tip) => tip.label.name)).toEqual(["Organization"]);
  });

  it("should show supported BioProject filters after route state sanitization", () => {
    const state = bioprojectSearchSchema.parse({
      organization: "DDBJ",
      publication: "Nature",
      grant: "AMED",
    });
    const result = parseQueryStateToTipList(state);

    expect(result.map((tip) => tip.label.name)).toEqual(["Organization", "Publication", "Grant"]);
  });
});
