import { describe, expect, it } from "vitest";
import { __TEST__fetchSearchALL } from "@/fetch/fetchBioProjectEntries.ts";
import type { BioProjectEntriesApiParams } from "@/api/searchResult/bioProject.ts";

const { parseParams } = __TEST__fetchSearchALL;

const expectKeyNotExists = (
  result: BioProjectEntriesApiParams,
  key: keyof BioProjectEntriesApiParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "organization");
  });
  it("", () => {
    const result = parseParams({ organization: "NCBI" });
    expect(result.organization).toBe("NCBI");
  });
  it("", () => {
    const result = parseParams({ publication: "Nature" });
    expect(result.publication).toBe("Nature");
  });
  it("", () => {
    const result = parseParams({ grant: "test grant" });
    expect(result.grant).toBe("test grant");
  });
  it("", () => {
    const result = parseParams({ umbrella: true });
    expect(result.umbrella).toBe("TRUE");
  });
  it("", () => {
    const result = parseParams({ umbrella: false });
    expect(result.umbrella).toBe("FALSE");
  });
  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
