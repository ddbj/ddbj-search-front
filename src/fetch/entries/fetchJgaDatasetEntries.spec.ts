import { describe, expect, it } from "vitest";
import type { JgaDatasetListRequestParams } from "@/api/entries/jgaDataset.ts";
import { __TEST__fetchJgaDatasetEntries } from "@/fetch/entries/fetchJgaDatasetEntries.ts";

const { parseParams } = __TEST__fetchJgaDatasetEntries;

const expectKeyNotExists = (
  result: JgaDatasetListRequestParams,
  key: keyof JgaDatasetListRequestParams,
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "keywords");
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
