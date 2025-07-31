import { describe, expect, it } from "vitest";
import { __TEST__QUERY_BUILDER } from "@/features/searchResult/QueryBuilder.tsx";
import type { AllSearchParams } from "@/schema/search.ts";
const { makeTypeLinkParams } = __TEST__QUERY_BUILDER;

describe.only("makeTypeLinkParams", () => {
  it("", () => {
    const result = makeTypeLinkParams({
      types: ["sra-analysis"],
      keywords: ["human"],
      page: 5,
    });
    expect((result as AllSearchParams).page).toBeUndefined();
    expect((result as AllSearchParams).types).toBeUndefined();
    expect(result.keywords).toEqual(["human"]);
  });
});
