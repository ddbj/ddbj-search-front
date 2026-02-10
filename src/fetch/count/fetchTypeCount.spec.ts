import { describe, expect, it } from "vitest";
import { __TEST__fetchTypeCount } from "@/fetch/count/fetchTypeCount.ts";
import type { CountTypesRequestParams } from "@/api/count/types.ts";

const { parseParams } = __TEST__fetchTypeCount;

const expectKeyNotExists = (
  result: CountTypesRequestParams,
  key: keyof CountTypesRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // default params are `{ includeFacets: false, includeProperties: false, dbXrefsLimit: 0 }`
    expect(Object.keys(result)).toHaveLength(3);
  });

  it("should handle base params - keywords", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });

  it("should handle base params - datePublished", () => {
    const result = parseParams({ datePublishedFrom: "2023-01-01" });
    expect(result.datePublishedFrom).toBe("2023-01-01");
  });

  it("should handle base params - dateUpdated", () => {
    const result = parseParams({ dateModifiedFrom: "2023-12-31" });
    expect(result.dateModifiedFrom).toBe("2023-12-31");
  });

  it("should handle multiple base params", () => {
    const result = parseParams({
      keywords: ["test", "data"],
      dateModifiedFrom: "2023-01-01",
      datePublishedFrom: "2023-12-31",
    });
    expect(result.keywords).toBe("test,data");
    expect(result.dateModifiedFrom).toBe("2023-01-01");
    expect(result.datePublishedFrom).toBe("2023-12-31");
  });

  it("should not include pagination params", () => {
    const result = parseParams({ page: 1, perPage: 10 });
    expectKeyNotExists(result, "page" as keyof CountTypesRequestParams);
    expectKeyNotExists(result, "perPage" as keyof CountTypesRequestParams);
  });

  it("should not include types param", () => {
    const result = parseParams({ types: ["biosample", "bioproject"] });
    expectKeyNotExists(result, "types" as keyof CountTypesRequestParams);
  });
});
