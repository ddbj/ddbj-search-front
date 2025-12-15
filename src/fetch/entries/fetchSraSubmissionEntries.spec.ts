import { describe, expect, it } from "vitest";
import { __TEST__fetchSraSubmissionEntries } from "@/fetch/entries/fetchSraSubmissionEntries.ts";
import type { SraSubmissionListRequestParams } from "@/api/entries/sraSubmission.ts";

const { parseParams } = __TEST__fetchSraSubmissionEntries;

const expectKeyNotExists = (
  result: SraSubmissionListRequestParams,
  key: keyof SraSubmissionListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    // Add assertions for SRA Submission-specific parameters if needed
  });

  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
