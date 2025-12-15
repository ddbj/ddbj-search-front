import { describe, expect, it } from "vitest";
import { __TEST__fetchSraExperimentEntries } from "@/fetch/entries/fetchSraExperimentEntries.ts";
import type { SraExperimentListRequestParams } from "@/api/entries/sraExperiment.ts";

const { parseParams } = __TEST__fetchSraExperimentEntries;

const expectKeyNotExists = (
  result: SraExperimentListRequestParams,
  key: keyof SraExperimentListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for SRA Experiment-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
