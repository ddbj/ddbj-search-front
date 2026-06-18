import { describe, expect, it } from "vitest";
import { __TEST__fetchSraStudyEntries } from "@/lib/fetch/entries/fetchSraStudyEntries.ts";
import type { SraStudyListRequestParams } from "@/schema/api/entries/sraStudy.ts";

const { parseParams } = __TEST__fetchSraStudyEntries;

const expectKeyNotExists = (
  result: SraStudyListRequestParams,
  key: keyof SraStudyListRequestParams,
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
