import { describe, expect, it } from "vitest";
import { __TEST__fetchMetaboBankFacets } from "@/fetch/facets/fetchMetaboBankFacets.ts";

const { parseParams } = __TEST__fetchMetaboBankFacets;

describe("parseParams", () => {
  it("serializes base params", () => {
    const result = parseParams({
      keywords: ["human", "cat"],
      dateModifiedFrom: "2024-02-01",
      dateModifiedTo: "2024-02-29",
    });

    expect(result.keywords).toBe("human,cat");
    expect(result.dateModifiedFrom).toBe("2024-02-01");
    expect(result.dateModifiedTo).toBe("2024-02-29");
  });
});
