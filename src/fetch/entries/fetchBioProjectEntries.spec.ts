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
  it("returns only base params when no bioproject-specific params are provided", () => {
    const result = parseParams({});
    expect(result.organization).toBeUndefined();
    expect(result.publication).toBeUndefined();
    expect(result.grant).toBeUndefined();
    expect(result.umbrella).toBeUndefined();
  });

  it("includes organization when provided", () => {
    const result = parseParams({ organization: "NCBI" });
    expect(result.organization).toBe("NCBI");
  });

  it("includes publication when provided", () => {
    const result = parseParams({ publication: "Nature" });
    expect(result.publication).toBe("Nature");
  });

  it("includes grant when provided", () => {
    const result = parseParams({ grant: "test grant" });
    expect(result.grant).toBe("test grant");
  });

  it("serializes umbrella=true as 'true'", () => {
    const result = parseParams({ umbrella: true });
    expect(result.umbrella).toBe("true");
  });

  it("serializes umbrella=false as 'false'", () => {
    const result = parseParams({ umbrella: false });
    expect(result.umbrella).toBe("false");
  });

  it("serializes keywords array as a comma-separated string", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
