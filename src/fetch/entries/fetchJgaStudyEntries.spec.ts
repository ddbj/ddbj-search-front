import { describe, expect, it } from "vitest";
import { __TEST__fetchJgaStudyEntries } from "@/fetch/entries/fetchJgaStudyEntries.ts";
import type { JgaStudyListRequestParams } from "@/api/entries/jgaStudy.ts";

const { parseParams } = __TEST__fetchJgaStudyEntries;

const expectKeyNotExists = (
  result: JgaStudyListRequestParams,
  key: keyof JgaStudyListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for JGA Study-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
