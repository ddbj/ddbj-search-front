import { describe, expect, it, vi } from "vitest";
import { __TEST__fetchAllFacets, fetchAllFacets } from "@/lib/fetch/facets/fetchAllFacets.ts";

const { parseParams } = __TEST__fetchAllFacets;

describe("parseParams", () => {
  it("serializes requested facets as a comma-separated string", () => {
    const result = parseParams({}, { facets: ["type"] });

    expect(result.facets).toBe("type");
  });

  it("serializes types when the caller preserves them", () => {
    const result = parseParams(
      { types: ["bioproject", "biosample", "gea", "metabobank"] },
      { facets: ["organism"] },
    );

    expect(result.types).toBe("bioproject,biosample,gea,metabobank");
  });

  it("keeps base filters", () => {
    const result = parseParams(
      {
        keywords: ["human", "cat"],
        datePublishedFrom: "2024-01-01",
        datePublishedTo: "2024-01-31",
        dateModifiedFrom: "2024-02-01",
        dateModifiedTo: "2024-02-29",
        organization: "NCBI",
        publication: "Nature",
        grant: "NSF",
      },
      { facets: ["type"] },
    );

    expect(result.keywords).toBe("human,cat");
    expect(result.datePublishedFrom).toBe("2024-01-01");
    expect(result.datePublishedTo).toBe("2024-01-31");
    expect(result.dateModifiedFrom).toBe("2024-02-01");
    expect(result.dateModifiedTo).toBe("2024-02-29");
    expect(result.organization).toBe("NCBI");
    expect("publication" in result).toBe(false);
    expect("grant" in result).toBe(false);
  });
});

describe("fetchAllFacets", () => {
  it("returns empty facets for invalid organism query errors", async () => {
    const mockFetch = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          title: "Unprocessable Entity",
          status: 422,
          detail: "query.organism: String should match pattern '^\\d+$'",
        }),
        {
          status: 422,
          statusText: "Unprocessable Entity",
          headers: {
            "content-type": "application/problem+json",
          },
        },
      ),
    );

    vi.stubGlobal("fetch", mockFetch);

    await expect(fetchAllFacets({ organism: "abc" }, { facets: ["type"] })).resolves.toEqual({
      facets: {
        type: null,
        organism: null,
        accessibility: null,
      },
    });

    vi.unstubAllGlobals();
  });
});
