import { describe, expect, it } from "vitest";
import { __TEST__fetchJgaDatasetEntries } from "@/lib/fetch/entries/fetchJgaDatasetEntries.ts";
import type { JgaDatasetListRequestParams } from "@/schema/api/entries/jgaDataset.ts";

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

  it("should handle supported params", () => {
    const result = parseParams({ keywords: ["human", "cat"], publication: "Nature" });
    expect(result.keywords).toBe("human,cat");
    expect(result.publication).toBe("Nature");
  });
});
