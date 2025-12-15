import { describe, expect, it } from "vitest";
import { __TEST__fetchSraSampleEntries } from "@/fetch/entries/fetchSraSampleEntries.ts";
import type { SraSampleListRequestParams } from "@/api/entries/sraSample.ts";

const { parseParams } = __TEST__fetchSraSampleEntries;

const expectKeyNotExists = (
  result: SraSampleListRequestParams,
  key: keyof SraSampleListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for SRA Sample-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
