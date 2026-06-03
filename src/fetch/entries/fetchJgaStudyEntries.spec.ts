import { describe, expect, it } from "vitest";
import type { JgaStudyListRequestParams } from "@/api/entries/jgaStudy.ts";
import { __TEST__fetchJgaStudyEntries } from "@/fetch/entries/fetchJgaStudyEntries.ts";

const { parseParams } = __TEST__fetchJgaStudyEntries;

const expectKeyNotExists = (
  result: JgaStudyListRequestParams,
  key: keyof JgaStudyListRequestParams,
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "keywords");
  });

  it("should handle supported params", () => {
    const result = parseParams({
      keywords: ["human", "cat"],
      publication: "Nature",
      grant: "NSF",
    });
    expect(result.keywords).toBe("human,cat");
    expect(result.publication).toBe("Nature");
    expect(result.grant).toBe("NSF");
  });
});
