import { describe, expect, it } from "vitest";
import { __TEST__fetchSraStudyEntries } from "@/fetch/entries/fetchSraStudyEntries.ts";
import type { SraStudyListRequestParams } from "@/api/entries/sraStudy.ts";

const { parseParams } = __TEST__fetchSraStudyEntries;

const expectKeyNotExists = (
  result: SraStudyListRequestParams,
  key: keyof SraStudyListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for SRA Study-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
