import { describe, expect, it } from "vitest";
import { __QUERY_LISTS_TEST__ } from "@/components/organisms/useSearchs/QueryLists.tsx";
import { compileDateRangeString } from "@/utils/date.ts";
import type { GlobalSearchSchemaType } from "@/schema/search.ts";

const { parseQueryStateToTipList } = __QUERY_LISTS_TEST__;

describe("parseQueryStateToTipList", () => {
  it("should return empty array when initial state", () => {
    const result = parseQueryStateToTipList({});
    expect(result).toEqual([]);
  });

  it("", () => {
    const state: GlobalSearchSchemaType = {};
    state.keywords = ["human", "cat"];
    const result = parseQueryStateToTipList(state);
    console.log(result);
    expect(result.length).toBe(2);
    expect(result[0].label.name).toBe("Keyword");
  });
  it("", () => {
    const state: GlobalSearchSchemaType = {};
    state.types = ["sra-analysis", "jga-study"];
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
  });
  it("", () => {
    const state: GlobalSearchSchemaType = {};
    state.datePublished = compileDateRangeString("2025-07-01", "2025-07-10");
    state.dateUpdated = compileDateRangeString("2024-07-01", "2024-07-10");
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result.find((o) => o.data.name === "datePublished")?.label.value).toBe(
      "2025-07-01 | 2025-07-10"
    );
  });
});
