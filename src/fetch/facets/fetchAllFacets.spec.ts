import { describe, expect, it } from "vitest";
import { __TEST__fetchAllFacets } from "@/fetch/facets/fetchAllFacets.ts";

const { parseParams } = __TEST__fetchAllFacets;

describe("parseParams", () => {
  it("serializes requested facets as a comma-separated string", () => {
    const result = parseParams({}, { facets: ["type"] });

    expect(result.facets).toBe("type");
  });

  it("serializes types when the caller preserves them", () => {
    const result = parseParams({ types: ["bioproject", "biosample"] }, { facets: ["organism"] });

    expect(result.types).toBe("bioproject,biosample");
  });

  it("keeps base filters", () => {
    const result = parseParams(
      {
        keywords: ["human", "cat"],
        datePublishedFrom: "2024-01-01",
        datePublishedTo: "2024-01-31",
        dateModifiedFrom: "2024-02-01",
        dateModifiedTo: "2024-02-29",
      },
      { facets: ["type"] },
    );

    expect(result.keywords).toBe("human,cat");
    expect(result.datePublishedFrom).toBe("2024-01-01");
    expect(result.datePublishedTo).toBe("2024-01-31");
    expect(result.dateModifiedFrom).toBe("2024-02-01");
    expect(result.dateModifiedTo).toBe("2024-02-29");
  });
});
