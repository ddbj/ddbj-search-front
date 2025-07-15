import { describe, expect, it } from "vitest";
import { __QUERY_LISTS_TEST__ } from "@/components/organisms/QueryLists.tsx";
import { __SEARCH_QUERY_STATE_TEST__ } from "@/state/SearchQueryState.ts";
import { stringToDateRange2 } from "@/utils/date.ts";
import type { DBType } from "@/consts.ts";

const { parseQueryStateToTipList } = __QUERY_LISTS_TEST__;
const { getNewInitialState } = __SEARCH_QUERY_STATE_TEST__;

describe("parseQueryStateToTipList", () => {
  it("should return empty array when initial state", () => {
    const state = getNewInitialState();
    const result = parseQueryStateToTipList(state);
    expect(result).toEqual([]);
  });

  it("", () => {
    const state = getNewInitialState();
    state.keywords = "human,cat";
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result[0].label.name).toBe("Keyword");
  });
  it("", () => {
    const state = getNewInitialState();
    state.types.biosample = true;
    state.types["sra-analysis"] = true;
    state.types["jga-study"] = true;
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(3);
  });
  it("", () => {
    const state = getNewInitialState();
    Object.keys(state.types).forEach((key) => (state.types[key as DBType] = true));
    const result = parseQueryStateToTipList(state);
    console.log(result);
    expect(result.length).toBe(0);
  });
  it("", () => {
    const state = getNewInitialState();
    state.datePublished = stringToDateRange2("2025-07-01", "2025-07-10");
    state.dateUpdated = stringToDateRange2("2024-07-01", "2024-07-10");
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    expect(result.find((o) => o.data.name === "datePublished")?.label.value).toBe(
      "2025-07-01 | 2025-07-10"
    );
  });
});
