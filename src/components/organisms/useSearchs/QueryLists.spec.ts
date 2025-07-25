import { describe, expect, it } from "vitest";
import { __QUERY_LISTS_TEST__ } from "@/components/organisms/useSearchs/QueryLists.tsx";
import { compileDateRangeString } from "@/utils/date.ts";
import type { SearchBase, AllSearch } from "@/schema/search.ts";

const { parseQueryStateToTipList } = __QUERY_LISTS_TEST__;

describe("parseQueryStateToTipList", () => {
  it("should return empty array when initial state", () => {
    const result = parseQueryStateToTipList({});
    expect(result).toEqual([]);
  });

  it("should parse keywords to QueryTipProps array", () => {
    const state: AllSearch = {};
    state.keywords = ["human", "cat"];
    const result = parseQueryStateToTipList(state);
    console.log(result);
    expect(result.length).toBe(2);
    expect(result[0].label.name).toBe("Keyword");
  });

  it("should parse types to QueryTipProps array", () => {
    const state: AllSearch = {};
    state.types = ["sra-analysis", "jga-study"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
  });

  it("should parse date ranges to QueryTipProps array", () => {
    const state: AllSearch = {};
    state.datePublished = compileDateRangeString("2025-07-01", "2025-07-10");
    state.dateUpdated = compileDateRangeString("2024-07-01", "2024-07-10");
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result.find((o) => o.data.name === "datePublished")?.label.value).toBe(
      "2025-07-01 | 2025-07-10"
    );
  });

  it("", () => {
    const state: AllSearch = {};
    state.grant = "test grant ";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(1);
    expect(result[0].data.value).toBe("test grant");
  });

  it("", () => {
    const state: AllSearch = {};
    state.grant = "";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });

  it("", () => {
    const state: AllSearch = {};
    state.grant = undefined;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });

  it("", () => {
    const state: AllSearch = {};
    state.umbrella = true;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(1);
    expect(result[0].data.value).toBe("TRUE");
  });
  it("", () => {
    const state: AllSearch = {};
    state.umbrella = false;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(0);
  });
});
