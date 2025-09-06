import { describe, expect, it } from "vitest";
import { __TEST__fetchBioProjectEntries } from "@/fetch/entries/fetchBioProjectEntries.ts";
import type { BioProjectListRequestParams } from "@/api/entries/bioProject.ts";

const { parseParams } = __TEST__fetchBioProjectEntries;

const expectKeyNotExists = (
  result: BioProjectListRequestParams,
  key: keyof BioProjectListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("should not have organization if it is not provided", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "organization");
  });
  it("should have organization if it is provided", () => {
    const result = parseParams({ organization: "NCBI" });
    expect(result.organization).toBe("NCBI");
  });
  it("should have publication if it is provided", () => {
    const result = parseParams({ publication: "Nature" });
    expect(result.publication).toBe("Nature");
  });
  it("should have grant if it is provided", () => {
    const result = parseParams({ grant: "test grant" });
    expect(result.grant).toBe("test grant");
  });
  it("should convert umbrella true to 'TRUE'", () => {
    const result = parseParams({ umbrella: true });
    expect(result.umbrella).toBe("TRUE");
  });
  it("should convert umbrella false to 'FALSE'", () => {
    const result = parseParams({ umbrella: false });
    expect(result.umbrella).toBe("FALSE");
  });
  it("should handle base params", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
