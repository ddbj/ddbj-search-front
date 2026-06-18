import { describe, expect, it } from "vitest";
import { __TEST__fetchGeaFacets } from "@/lib/fetch/facets/fetchGeaFacets.ts";

const { parseParams } = __TEST__fetchGeaFacets;

describe("parseParams", () => {
  it("serializes base params", () => {
    const result = parseParams({
      keywords: ["human", "cat"],
      dateModifiedFrom: "2024-02-01",
      dateModifiedTo: "2024-02-29",
      organization: "NCBI",
      publication: "Nature",
      grant: "NSF",
    });

    expect(result.keywords).toBe("human,cat");
    expect(result.dateModifiedFrom).toBe("2024-02-01");
    expect(result.dateModifiedTo).toBe("2024-02-29");
    expect(result.organization).toBe("NCBI");
    expect(result.publication).toBe("Nature");
    expect("grant" in result).toBe(false);
  });
});
