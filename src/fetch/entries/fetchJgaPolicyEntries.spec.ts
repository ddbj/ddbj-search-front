import { describe, expect, it } from "vitest";
import type { JgaPolicyListRequestParams } from "@/api/entries/jgaPolicy.ts";
import { __TEST__fetchJgaPolicyEntries } from "@/fetch/entries/fetchJgaPolicyEntries.ts";

const { parseParams } = __TEST__fetchJgaPolicyEntries;

const expectKeyNotExists = (
  result: JgaPolicyListRequestParams,
  key: keyof JgaPolicyListRequestParams,
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
