import { describe, expect, it } from "vitest";
import { __TEST__fetchSraExperimentEntries } from "@/lib/fetch/entries/fetchSraExperimentEntries.ts";
import type { SraExperimentListRequestParams } from "@/schema/api/entries/sraExperiment.ts";

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
