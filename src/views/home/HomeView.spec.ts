import { describe, it, expect } from "vitest";
import { __HOME_VIEW_TEST__ } from "@/views/home/HomeView.tsx";
const { getSampleQueries, makeNavigateArgs, makePastYearsDateRange } = __HOME_VIEW_TEST__;

describe("makeNavigateArgs", () => {
  it("should return {to:'all'} when types are not specified", () => {
    const { to, search } = makeNavigateArgs([], []);
    expect(to).toBe("/entry/");
    expect(search).toEqual({});
  });
  it("should return {to:'/bioproject'} with single type and keywords", () => {
    const { to, search } = makeNavigateArgs(["bioproject"], ["human"]);
    expect(to).toBe("/entry/bioproject/");
    expect(search).toEqual({ keywords: ["human"] });
  });
  it("should return {to:'/all'} with multiple types", () => {
    const { to, search } = makeNavigateArgs(["bioproject", "sra-run", "biosample"], ["human"]);
    expect(to).toBe("/entry/");
    expect(search).toEqual({ keywords: ["human"], types: ["bioproject", "sra-run", "biosample"] });
  });
});

describe("makePastYearsDateRange", () => {
  it("returns the datePublished range for the past year", () => {
    const result = makePastYearsDateRange(new Date(2026, 5, 3), 1);
    expect(result).toEqual({
      datePublishedFrom: "2025-06-03",
      datePublishedTo: "2026-06-03",
    });
  });

  it("returns the datePublished range for the past 10 years", () => {
    const result = makePastYearsDateRange(new Date(2026, 5, 3), 10);
    expect(result).toEqual({
      datePublishedFrom: "2016-06-03",
      datePublishedTo: "2026-06-03",
    });
  });
});

describe("getSampleQueries", () => {
  it("returns the client requested sample queries", () => {
    const result = getSampleQueries(new Date(2026, 5, 3));

    expect(result).toEqual([
      {
        id: "bioproject-crest",
        label: "BioProject: CREST grant",
        to: "/entry/bioproject/",
        search: { grant: "CREST" },
      },
      {
        id: "biosample-sars-cov2",
        label: "BioSample: first published in the past 1 year, including SARS-COV2",
        to: "/entry/biosample/",
        search: {
          keywords: ["SARS-COV2"],
          datePublishedFrom: "2025-06-03",
          datePublishedTo: "2026-06-03",
        },
      },
      {
        id: "gea-single-cell",
        label: "GEA: first published in the past 10 years, including single-cell",
        to: "/entry/gea/",
        search: {
          keywords: ["single-cell"],
          datePublishedFrom: "2016-06-03",
          datePublishedTo: "2026-06-03",
        },
      },
    ]);
  });
});
