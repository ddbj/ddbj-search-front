import { describe, expect, it } from "vitest";
import { __TEST__TYPE_SELECTOR } from "@/views/searchResult/components/queryBuilder/controls/TypeSelector.tsx";

const { makeTypeFacetParams } = __TEST__TYPE_SELECTOR;

describe("makeTypeFacetParams", () => {
  it("removes types and pagination params", () => {
    const result = makeTypeFacetParams({
      types: ["bioproject"],
      page: 2,
      perPage: 20,
      keywords: ["human"],
    });

    expect(result).toEqual({ keywords: ["human"] });
  });
});
