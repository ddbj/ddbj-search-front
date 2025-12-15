import { describe, expect, it } from "vitest";
import { __TEST__fetchSraRunEntries } from "@/fetch/entries/fetchSraRunEntries.ts";
import type { SraRunListRequestParams } from "@/api/entries/sraRun.ts";

const { parseParams } = __TEST__fetchSraRunEntries;

const expectKeyNotExists = (
  result: SraRunListRequestParams,
  key: keyof SraRunListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for SRA Run-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
