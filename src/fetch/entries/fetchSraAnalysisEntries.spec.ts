import { describe, expect, it } from "vitest";
import { __TEST__fetchSraAnalysisEntries } from "@/fetch/entries/fetchSraAnalysisEntries.ts";
import type { SraAnalysisListRequestParams } from "@/api/entries/sraAnalysis.ts";

const { parseParams } = __TEST__fetchSraAnalysisEntries;

const expectKeyNotExists = (
  result: SraAnalysisListRequestParams,
  key: keyof SraAnalysisListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for SRA Analysis-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
