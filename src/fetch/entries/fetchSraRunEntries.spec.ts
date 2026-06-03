import { describe, expect, it } from "vitest";
import type { SraRunListRequestParams } from "@/api/entries/sraRun.ts";
import { __TEST__fetchSraRunEntries } from "@/fetch/entries/fetchSraRunEntries.ts";

const { parseParams } = __TEST__fetchSraRunEntries;

const expectKeyNotExists = (
  result: SraRunListRequestParams,
  key: keyof SraRunListRequestParams,
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
