import { describe, expect, it } from "vitest";
import type { BiosampleListRequestParams } from "@/api/entries/bioSample.ts";
import { __TEST__fetchBioSampleEntries } from "@/fetch/entries/fetchBioSampleEntries.ts";

const { parseParams } = __TEST__fetchBioSampleEntries;

const expectKeyNotExists = (
  result: BiosampleListRequestParams,
  key: keyof BiosampleListRequestParams,
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "keywords");
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
