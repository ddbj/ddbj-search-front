import { describe, expect, it } from "vitest";
import type { SraExperimentListRequestParams } from "@/api/entries/sraExperiment.ts";
import { __TEST__fetchSraExperimentEntries } from "@/fetch/entries/fetchSraExperimentEntries.ts";

const { parseParams } = __TEST__fetchSraExperimentEntries;

const expectKeyNotExists = (
  result: SraExperimentListRequestParams,
  key: keyof SraExperimentListRequestParams,
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
