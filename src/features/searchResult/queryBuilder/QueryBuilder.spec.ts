import { describe, expect, it } from "vitest";
import { __TEST__QUERY_BUILDER } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
const { makeTypeLinkParams } = __TEST__QUERY_BUILDER;

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
