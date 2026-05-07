import { describe, expect, it } from "vitest";
import { __TEST__fetchBioProjectFacets } from "@/fetch/facets/fetchBioProjectFacets.ts";

const { parseParams } = __TEST__fetchBioProjectFacets;

describe("parseParams", () => {
  it("returns only base params when no bioproject-specific params are provided", () => {
    const result = parseParams({});
    expect(result.organization).toBeUndefined();
    expect(result.publication).toBeUndefined();
    expect(result.grant).toBeUndefined();
    expect(result.objectTypes).toBeUndefined();
    expect(result.facets).toBe("organism,accessibility,objectType");
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

  it("serializes a single objectType", () => {
    const result = parseParams({ objectTypes: ["BioProject"] });
    expect(result.objectTypes).toBe("BioProject");
  });

  it("serializes multiple objectTypes as a comma-separated string", () => {
    const result = parseParams({ objectTypes: ["BioProject", "UmbrellaBioProject"] });
    expect(result.objectTypes).toBe("BioProject,UmbrellaBioProject");
  });

  it("serializes keywords array as a comma-separated string", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
});
