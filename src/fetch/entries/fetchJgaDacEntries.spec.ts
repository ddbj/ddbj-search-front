import { describe, expect, it } from "vitest";
import { __TEST__fetchJgaDacEntries } from "@/fetch/entries/fetchJgaDacEntries.ts";
import type { JgaDacListRequestParams } from "@/api/entries/jgaDac.ts";

const { parseParams } = __TEST__fetchJgaDacEntries;

const expectKeyNotExists = (
  result: JgaDacListRequestParams,
  key: keyof JgaDacListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for JGA DAC-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
