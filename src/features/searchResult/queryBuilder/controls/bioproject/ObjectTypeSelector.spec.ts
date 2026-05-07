import { describe, expect, it } from "vitest";
import { __TEST__OBJECT_TYPE_SELECTOR } from "@/features/searchResult/queryBuilder/controls/bioproject/ObjectTypeSelector.tsx";

const { makeObjectTypeFacetParams } = __TEST__OBJECT_TYPE_SELECTOR;

describe("makeObjectTypeFacetParams", () => {
  it("removes objectTypes and pagination params", () => {
    const result = makeObjectTypeFacetParams({
      objectTypes: ["UmbrellaBioProject"],
      page: 2,
      perPage: 20,
      keywords: ["metagenome"],
      organization: "NCBI",
    });

    expect(result).toEqual({ keywords: ["metagenome"], organization: "NCBI" });
  });
});
