import { describe, expect, it } from "vitest";
import { __TEST__fetchBioSampleFacets } from "@/fetch/facets/fetchBioSampleFacets.ts";
import { __TEST__fetchJgaStudyFacets } from "@/fetch/facets/fetchJgaStudyFacets.ts";

describe("DB-specific facet params", () => {
  it("omits publication and grant for BioSample facets", () => {
    const result = __TEST__fetchBioSampleFacets.parseParams({
      keywords: ["human", "cat"],
      organization: "NCBI",
      publication: "Nature",
      grant: "NSF",
    });

    expect(result.keywords).toBe("human,cat");
    expect(result.organization).toBe("NCBI");
    expect("publication" in result).toBe(false);
    expect("grant" in result).toBe(false);
  });

  it("includes publication and grant for JGA Study facets", () => {
    const result = __TEST__fetchJgaStudyFacets.parseParams({
      keywords: ["human", "cat"],
      organization: "NCBI",
      publication: "Nature",
      grant: "NSF",
    });

    expect(result.keywords).toBe("human,cat");
    expect(result.organization).toBe("NCBI");
    expect(result.publication).toBe("Nature");
    expect(result.grant).toBe("NSF");
  });
});
