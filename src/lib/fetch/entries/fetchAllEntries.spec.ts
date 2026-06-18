import { describe, expect, it } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST__fetchSearchALL } from "@/lib/fetch/entries/fetchAllEntries.ts";
import type { AllEntryListRequestParams } from "@/schema/api/entries/all.ts";

const { parseParams } = __TEST__fetchSearchALL;

const expectKeyNotExists = (
  result: AllEntryListRequestParams,
  key: keyof AllEntryListRequestParams,
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
    const result = parseParams({
      keywords: ["human", "cat"],
      organization: "NCBI",
      publication: "Nature",
      grant: "NSF",
    });
    expect(result.keywords).toBe("human,cat");
    expect(result.organization).toBe("NCBI");
    expect("publication" in result).toBe(false);
    expect("grant" in result).toBe(false);
  });
});
