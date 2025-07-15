import { copy } from "copy-anything";
import { describe, expect, it } from "vitest";
import { __SEARCH_QUERY_STATE_TEST__ } from "@/state/SearchQueryState.ts";
import { stringToDateRange2 } from "@/utils/date.ts";

const { removeItem, getNewInitialState } = __SEARCH_QUERY_STATE_TEST__;

describe("removeItem", () => {
  it("should return completely new object", () => {
    const original = copy(getNewInitialState());
    const result = removeItem(original, "datePublished");
    expect(result).not.toBe(original);
  });
  it("should remove a simple property", () => {
    const original = copy(getNewInitialState());
    original.datePublished = stringToDateRange2("2025-07-01", "2025-07-01");
    const result = removeItem(original, "datePublished");
    expect(result.datePublished).not.toBeTruthy();
  });

  it("should remove an item from a keyword list", () => {
    const original = copy(getNewInitialState());
    original.keywords = "human, cat, dog";
    const result = removeItem(original, "keywords", "cat");
    expect(result.keywords).toEqual("human, dog");
  });

  it("", () => {
    const original = copy(getNewInitialState());
    original.keywords = "human, cat, dog";
    const resultA = removeItem(original, "keywords", "cat");
    const resultB = removeItem(resultA, "keywords", "human");
    const resultC = removeItem(resultB, "keywords", "dog");
    expect(resultC.keywords).not.toBeTruthy();
  });

  it("should not change the keyword list if the item to be removed does not exist", () => {
    const original = copy(getNewInitialState());
    original.keywords = "human, cat, dog";
    const result = removeItem(original, "keywords", "horse");
    expect(result.keywords).toEqual(original.keywords);
  });

  it("", () => {
    const original = copy(getNewInitialState());
    original.types.biosample = true;
    original.types["jga-study"] = true;
    //
    const result = removeItem(original, "types", "jga-study");
    expect(result.types["jga-study"]).toBe(false);
  });
});
