import { describe, expect, it } from "vitest";
import type { GeaListRequestParams } from "@/api/entries/gea.ts";
import { __TEST__fetchGeaEntries } from "@/lib/fetch/entries/fetchGeaEntries.ts";

const { parseParams } = __TEST__fetchGeaEntries;

const expectKeyNotExists = (result: GeaListRequestParams, key: keyof GeaListRequestParams) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should handle empty params", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "keywords");
  });

  it("should handle base params", () => {
    const result = parseParams({
      keywords: ["human", "cat"],
      organization: "NCBI",
      publication: "Nature",
      grant: "NSF",
    });
    expect(result.keywords).toBe("human,cat");
    expect(result.organization).toBe("NCBI");
    expect(result.publication).toBe("Nature");
    expect("grant" in result).toBe(false);
  });
});
