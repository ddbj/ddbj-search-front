import { describe, expect, it } from "vitest";
import { __TEST__fetchJgaPolicyEntries } from "@/lib/fetch/entries/fetchJgaPolicyEntries.ts";
import type { JgaPolicyListRequestParams } from "@/schema/api/entries/jgaPolicy.ts";

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

  it("should handle supported params", () => {
    const result = parseParams({ keywords: ["human", "cat"], publication: "Nature" });
    expect(result.keywords).toBe("human,cat");
    expect(result.publication).toBe("Nature");
  });
});
