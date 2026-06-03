import { describe, expect, it, vi } from "vitest";
import { API_PATH_BIOSAMPLE_FACET_LIST } from "@/api/paths.ts";
import {
  __TEST__fetchBioSampleFacets,
  fetchBioSampleFacets,
} from "@/fetch/facets/fetchBioSampleFacets.ts";
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

  it("does not include unsupported publication or grant in BioSample facet requests", async () => {
    const mockData = {
      facets: {
        type: null,
        organism: null,
        accessibility: null,
      },
    };

    const mockFetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }),
    );

    vi.stubGlobal("fetch", mockFetch);

    await fetchBioSampleFacets({
      keywords: ["human"],
      organization: "NCBI",
      publication: "Nature",
      grant: "AMED",
    });

    expect(mockFetch).toHaveBeenCalledWith(
      `${API_PATH_BIOSAMPLE_FACET_LIST}?keywords=human&organization=NCBI`,
      { method: "GET" },
    );
    expect(mockFetch.mock.calls[0][0]).not.toContain("publication=Nature");
    expect(mockFetch.mock.calls[0][0]).not.toContain("grant=AMED");

    vi.unstubAllGlobals();
  });
});
