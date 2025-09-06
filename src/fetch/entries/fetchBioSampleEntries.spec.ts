import { describe, expect, it } from "vitest";
import { __TEST__fetchBioSampleEntries } from "@/fetch/entries/fetchBioSampleEntries.ts";
import type { BiosampleListRequestParams } from "@/api/entries/bioSample.ts";

const { parseParams } = __TEST__fetchBioSampleEntries;

const expectKeyNotExists = (
  result: BiosampleListRequestParams,
  key: keyof BiosampleListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for BioSample-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
