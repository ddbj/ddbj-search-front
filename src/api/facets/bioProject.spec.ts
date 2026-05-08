import { describe, expect, it } from "vitest";
import { isBioProjectFacetListResponse } from "@/api/facets/bioProject.ts";

describe("isBioProjectFacetListResponse", () => {
  it("accepts known BioProject objectType facet values", () => {
    const result = isBioProjectFacetListResponse({
      facets: {
        type: null,
        organism: [{ value: "562", count: 1232567, label: "Escherichia coli" }],
        accessibility: null,
        objectType: [
          { value: "BioProject", count: 900 },
          { value: "UmbrellaBioProject", count: 100 },
        ],
      },
    });

    expect(result).toBe(true);
  });

  it("rejects unknown BioProject objectType facet values", () => {
    const result = isBioProjectFacetListResponse({
      facets: {
        type: null,
        organism: null,
        accessibility: null,
        objectType: [{ value: "OtherBioProject", count: 1 }],
      },
    });

    expect(result).toBe(false);
  });
});
