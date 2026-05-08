import { describe, expect, it } from "vitest";
import { __TEST__fetchOrganismFacets } from "@/fetch/facets/fetchOrganismFacets.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

const { makeOrganismFacetParams, makeOrganismFacetQueryKey, parseBaseOrganismFacetParams } =
  __TEST__fetchOrganismFacets;

describe("makeOrganismFacetParams", () => {
  it("removes only self and paging params", () => {
    const params: AnySearchParams = {
      keywords: ["human"],
      organism: "562",
      page: 3,
      perPage: 25,
      datePublishedFrom: "2024-01-01",
      datePublishedTo: "2024-01-31",
    };

    expect(makeOrganismFacetParams(params)).toEqual({
      keywords: ["human"],
      datePublishedFrom: "2024-01-01",
      datePublishedTo: "2024-01-31",
    });
  });
});

describe("makeOrganismFacetQueryKey", () => {
  it("uses facet params without organism in the query key", () => {
    const params: AnySearchParams = {
      keywords: ["human"],
      organism: "562",
      page: 3,
    };

    expect(makeOrganismFacetQueryKey(null, params)).toEqual([
      "fetchOrganismFacets",
      "all",
      ["keywords", ["human"]],
    ]);
  });
});

describe("parseBaseOrganismFacetParams", () => {
  it("serializes base filters with facets=organism", () => {
    const params: AnySearchParams = {
      keywords: ["human", "cat"],
      organism: "562",
      page: 3,
      perPage: 25,
      dateModifiedFrom: "2024-02-01",
      dateModifiedTo: "2024-02-29",
    };

    expect(parseBaseOrganismFacetParams(params)).toEqual({
      keywords: "human,cat",
      dateModifiedFrom: "2024-02-01",
      dateModifiedTo: "2024-02-29",
      facets: "organism",
    });
  });
});
