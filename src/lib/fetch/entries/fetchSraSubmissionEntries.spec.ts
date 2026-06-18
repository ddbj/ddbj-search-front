import { describe, expect, it } from "vitest";
import type { SraSubmissionListRequestParams } from "@/api/entries/sraSubmission.ts";
import { __TEST__fetchSraSubmissionEntries } from "@/lib/fetch/entries/fetchSraSubmissionEntries.ts";

const { parseParams } = __TEST__fetchSraSubmissionEntries;

const expectKeyNotExists = (
  result: SraSubmissionListRequestParams,
  key: keyof SraSubmissionListRequestParams,
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
