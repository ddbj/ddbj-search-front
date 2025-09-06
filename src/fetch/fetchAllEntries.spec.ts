import { describe, expect, it } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST__fetchSearchALL } from "@/fetch/fetchAllEntries.ts";
import type { AllEntryListRequestParams } from "@/api/entries/all.ts";

const { parseParams } = __TEST__fetchSearchALL;

const expectKeyNotExists = (
  result: AllEntryListRequestParams,
  key: keyof AllEntryListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  //types
  it("should not include types param when no type is provided", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "types");
  });
  it("should not include types param when empty array is provided", () => {
    const result = parseParams({ types: [] });
    expectKeyNotExists(result, "types");
  });
  it("should join multiple types with comma", () => {
    const result = parseParams({ types: [dbTypes.biosample, dbTypes.bioproject] });
    expect(result.types).toBe("biosample,bioproject");
  });
  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
