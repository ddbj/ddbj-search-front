import { describe, expect, it } from "vitest";
import { __TEST__fetchMetaboBankEntries } from "@/lib/fetch/entries/fetchMetaboBankEntries.ts";
import type { MetaboBankListRequestParams } from "@/schema/api/entries/metaboBank.ts";

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
