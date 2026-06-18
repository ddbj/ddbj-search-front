import { describe, expect, it } from "vitest";
import { getDocs } from "@/schema/api/openapi.ts";

const docs = getDocs();

const getQueryParamNames = (path: string) => {
  const operation = docs.paths?.[path]?.get;
  if (!operation) {
    throw new Error(`GET ${path} is not registered in OpenAPI docs.`);
  }
  return (operation.parameters ?? []).flatMap((parameter) => {
    if ("$ref" in parameter) {
      return [];
    }
    return parameter.in === "query" ? [parameter.name] : [];
  });
};

const expectDetailFilters = (
  path: string,
  { publication, grant }: { publication: boolean; grant: boolean },
) => {
  const paramNames = getQueryParamNames(path);

  expect(paramNames).toContain("organization");
  if (publication) {
    expect(paramNames).toContain("publication");
  } else {
    expect(paramNames).not.toContain("publication");
  }
  if (grant) {
    expect(paramNames).toContain("grant");
  } else {
    expect(paramNames).not.toContain("grant");
  }
};

const publicationOnlyEntryPaths = [
  "/entries/gea/",
  "/entries/jga-dac/",
  "/entries/jga-dataset/",
  "/entries/jga-policy/",
  "/entries/metabobank/",
  "/entries/sra-analysis/",
  "/entries/sra-experiment/",
  "/entries/sra-run/",
  "/entries/sra-sample/",
  "/entries/sra-study/",
  "/entries/sra-submission/",
];

const publicationOnlyFacetPaths = [
  "/facets/gea",
  "/facets/jga-dac",
  "/facets/jga-dataset",
  "/facets/jga-policy",
  "/facets/metabobank",
  "/facets/sra-analysis",
  "/facets/sra-experiment",
  "/facets/sra-run",
  "/facets/sra-sample",
  "/facets/sra-study",
  "/facets/sra-submission",
];

describe("OpenAPI detail filter query params", () => {
  it("keeps only organization on all entry and facet endpoints", () => {
    expectDetailFilters("/entries/", { publication: false, grant: false });
    expectDetailFilters("/facets", { publication: false, grant: false });
  });

  it("excludes publication and grant from BioSample entry and facet endpoints", () => {
    expectDetailFilters("/entries/biosample/", { publication: false, grant: false });
    expectDetailFilters("/facets/biosample", { publication: false, grant: false });
  });

  it("includes publication and grant on BioProject entry and facet endpoints", () => {
    expectDetailFilters("/entries/bioproject/", { publication: true, grant: true });
    expectDetailFilters("/facets/bioproject", { publication: true, grant: true });
  });

  it("includes publication and grant on JGA Study entry and facet endpoints", () => {
    expectDetailFilters("/entries/jga-study/", { publication: true, grant: true });
    expectDetailFilters("/facets/jga-study", { publication: true, grant: true });
  });

  it("includes publication but not grant on the remaining DB-specific entry endpoints", () => {
    for (const path of publicationOnlyEntryPaths) {
      expectDetailFilters(path, { publication: true, grant: false });
    }
  });

  it("includes publication but not grant on the remaining DB-specific facet endpoints", () => {
    for (const path of publicationOnlyFacetPaths) {
      expectDetailFilters(path, { publication: true, grant: false });
    }
  });
});
