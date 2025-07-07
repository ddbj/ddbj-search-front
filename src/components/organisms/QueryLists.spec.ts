import { describe, expect, it } from "vitest";
import { __QUERY_LISTS_TEST__ } from "@/components/organisms/QueryLists.tsx";
import type { SearchQueryState } from "@/state/SearchQueryState.ts";

const { parseQueryStateToTipList } = __QUERY_LISTS_TEST__;

describe("parseQueryStateToTipList", () => {
  it("", () => {
    const result = parseQueryStateToTipList({});
    expect(result).toEqual([]);
  });
  it("", () => {
    const state: SearchQueryState = { types: ["bioSample", "bioProject"] };
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(2);
    const bioSample = result.find((item) => item.data.value === "bioSample");
    expect(bioSample?.data?.name).toBe("types");
    expect(bioSample?.data?.value).toBe("bioSample");
  });
  it("", () => {
    const state: SearchQueryState = {
      types: ["bioSample", "bioProject"],
      datePublished: "2026-01-01",
    };
    const result = parseQueryStateToTipList(state);
    expect(result.length).toBe(3);
    const datePublished = result.find((item) => item.data.name === "datePublished");
    expect(datePublished?.data.name).toBe("datePublished");
    expect(datePublished?.data.value).toBe("2026-01-01");
  });
});
