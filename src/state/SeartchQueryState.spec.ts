import { describe, it, expect } from "vitest";
import { __SEARCH_QUERY_STATE_TEST__, type SearchQueryState } from "@/state/SearchQueryState.ts";

const { removeItem: removeItem } = __SEARCH_QUERY_STATE_TEST__;

describe("removeItem", () => {
  const original: SearchQueryState = {
    keywords: ["human", "cat", "dog"],
    datePublished: "2022-01-01",
  };
  it("should return completely new object", () => {
    const result = removeItem(original, "datePublished");
    expect(result).not.toBe(original);
    expect(result.keywords).not.toBe(original.keywords);
  });
  it("should remove a simple property", () => {
    const result = removeItem(original, "datePublished");
    expect(result.datePublished).not.toBeTruthy();
  });

  it("should remove an item from a keyword list", () => {
    const result = removeItem(original, "keywords", "cat");
    expect(result.keywords).toEqual(["human", "dog"]);
  });

  it("should remove a keyword list if the the array becomes empty", () => {
    const resultA = removeItem(original, "keywords", "cat");
    const resultB = removeItem(resultA, "keywords", "human");
    const resultC = removeItem(resultB, "keywords", "dog");
    expect(resultC.keywords).not.toBeTruthy();
  });

  it("should not change the keyword list if the item to be removed does not exist", () => {
    const result = removeItem(original, "keywords", "horse");
    expect(result.keywords).toEqual(original.keywords);
  });
});
