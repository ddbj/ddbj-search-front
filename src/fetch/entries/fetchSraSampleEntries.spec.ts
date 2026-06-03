import { describe, expect, it } from "vitest";
import type { SraSampleListRequestParams } from "@/api/entries/sraSample.ts";
import { __TEST__fetchSraSampleEntries } from "@/fetch/entries/fetchSraSampleEntries.ts";

const { parseParams } = __TEST__fetchSraSampleEntries;

const expectKeyNotExists = (
  result: SraSampleListRequestParams,
  key: keyof SraSampleListRequestParams,
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
