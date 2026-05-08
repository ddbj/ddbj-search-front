import { describe, expect, it } from "vitest";
import { __TEST__QUERY_BUILDER } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
const { makeTypeLinkParams, shouldShowOrganismSelector } = __TEST__QUERY_BUILDER;

describe("makeTypeLinkParams", () => {
  it("", () => {
    const result = makeTypeLinkParams({
      types: ["sra-analysis"],
      keywords: ["human"],
      page: 5,
    });
    expect((result as AnySearchParams).page).toBeUndefined();
    expect((result as AnySearchParams).types).toBeUndefined();
    expect(result.keywords).toEqual(["human"]);
  });
});

describe("shouldShowOrganismSelector", () => {
  it("keeps the selector visible while the organism facet request is not successful yet", () => {
    expect(shouldShowOrganismSelector(undefined, false)).toBe(true);
  });

  it("hides the selector when the successful organism facet result has no items", () => {
    expect(shouldShowOrganismSelector([], true)).toBe(false);
  });

  it("hides the selector when the successful organism facet result is missing", () => {
    expect(shouldShowOrganismSelector(undefined, true)).toBe(false);
  });

  it("shows the selector when the successful organism facet result has items", () => {
    expect(shouldShowOrganismSelector([{ value: "562", count: 10 }], true)).toBe(true);
  });
});
