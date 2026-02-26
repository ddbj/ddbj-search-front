import { describe, expect, it } from "vitest";
import { parseBaseFacetParams } from "@/fetch/utils/parseBaseFacetParams.ts";
import type { AllFacetListRequestParams } from "@/api/facets/all.ts";

const expectKeyNotExists = (
  result: AllFacetListRequestParams,
  key: keyof AllFacetListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseBaseFacetParams", () => {
  it("should return empty object when params is empty", () => {
    const result = parseBaseFacetParams({});
    expect(result).toEqual({});
  });

  // keywords
  it("should not include keywords when keywords is empty array", () => {
    const result = parseBaseFacetParams({ keywords: [] });
    expectKeyNotExists(result, "keywords");
  });

  it("should join keywords with comma", () => {
    const result = parseBaseFacetParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });

  // datePublished
  it("should set datePublishedFrom", () => {
    const result = parseBaseFacetParams({ datePublishedFrom: "2025-07-01" });
    expect(result.datePublishedFrom).toBe("2025-07-01");
  });

  it("should set datePublishedTo", () => {
    const result = parseBaseFacetParams({ datePublishedTo: "2025-07-01" });
    expect(result.datePublishedTo).toBe("2025-07-01");
  });

  // dateModified
  it("should set dateModifiedFrom", () => {
    const result = parseBaseFacetParams({ dateModifiedFrom: "2025-07-01" });
    expect(result.dateModifiedFrom).toBe("2025-07-01");
  });

  it("should set dateModifiedTo", () => {
    const result = parseBaseFacetParams({ dateModifiedTo: "2025-07-01" });
    expect(result.dateModifiedTo).toBe("2025-07-01");
  });
});
