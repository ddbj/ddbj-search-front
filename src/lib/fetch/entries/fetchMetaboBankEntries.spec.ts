import { describe, expect, it } from "vitest";
import type { MetaboBankListRequestParams } from "@/api/entries/metaboBank.ts";
import { __TEST__fetchMetaboBankEntries } from "@/lib/fetch/entries/fetchMetaboBankEntries.ts";

const { parseParams } = __TEST__fetchMetaboBankEntries;

const expectKeyNotExists = (
  result: MetaboBankListRequestParams,
  key: keyof MetaboBankListRequestParams,
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
