import { describe, expect, it } from "vitest";
import { __TEST__fetchSraAnalysisEntries } from "@/lib/fetch/entries/fetchSraAnalysisEntries.ts";
import type { SraAnalysisListRequestParams } from "@/schema/api/entries/sraAnalysis.ts";

const { parseParams } = __TEST__fetchSraAnalysisEntries;

const expectKeyNotExists = (
  result: SraAnalysisListRequestParams,
  key: keyof SraAnalysisListRequestParams,
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
