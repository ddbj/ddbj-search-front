import { describe, expect, it } from "vitest";
import { __QUERY_LISTS_TEST__ } from "@/features/searchResult/organisms/QueryLists.tsx";
import type { AllSearchParams } from "@/schema/search.ts";

const { parseQueryStateToTipList } = __QUERY_LISTS_TEST__;

describe("parseQueryStateToTipList", () => {
  it("should return empty array when initial state", () => {
    const result = parseQueryStateToTipList({});
    expect(result).toEqual([]);
  });

  it("should parse keywords to QueryTipProps array", () => {
    const state: AllSearchParams = {};
    state.keywords = ["human", "cat"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result[0].label.name).toBe("Keyword");
  });

  it("should parse types to QueryTipProps array", () => {
    const state: AllSearchParams = {};
    state.types = ["sra-analysis", "jga-study"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
  });

  it("should parse date ranges to QueryTipProps array", () => {
    const state: AllSearchParams = {};
    state.datePublished = "2025-07-01,2025-07-10";
    state.dateUpdated = "2024-07-01,2024-07-10";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result.find((o) => o.data.name === "datePublished")?.label.value).toBe(
      "2025-07-01,2025-07-10"
    );
  });

  it("", () => {
    const state: AllSearchParams = {};
    state.grant = "test grant ";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(1);
    expect(result[0].data.value).toBe("test grant");
  });

  it("", () => {
    const state: AllSearchParams = {};
    state.grant = "";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });

  it("", () => {
    const state: AllSearchParams = {};
    state.grant = undefined;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });

  it("", () => {
    const state: AllSearchParams = {};
    state.umbrella = true;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(1);
    expect(result[0].data.value).toBe("TRUE");
  });
  it("", () => {
    const state: AllSearchParams = {};
    state.umbrella = false;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });
});
