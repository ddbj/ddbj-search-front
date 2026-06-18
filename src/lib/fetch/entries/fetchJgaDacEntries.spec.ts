import { describe, expect, it } from "vitest";
import { __TEST__fetchJgaDacEntries } from "@/lib/fetch/entries/fetchJgaDacEntries.ts";
import type { JgaDacListRequestParams } from "@/schema/api/entries/jgaDac.ts";

const { parseParams } = __TEST__fetchJgaDacEntries;

const expectKeyNotExists = (
  result: JgaDacListRequestParams,
  key: keyof JgaDacListRequestParams,
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
