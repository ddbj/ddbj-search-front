import { describe, expect, it } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST__QUERY_BUILDER } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
const { getDetailFilterSupport, makeTypeLinkParams, shouldShowOrganismSelector } =
  __TEST__QUERY_BUILDER;

describe("getDetailFilterSupport", () => {
  it("shows only organization on the all-entry route", () => {
    expect(getDetailFilterSupport(null)).toEqual({
      organization: true,
      publication: false,
      grant: false,
    });
  });

  it("shows only organization on BioSample", () => {
    expect(getDetailFilterSupport(dbTypes.biosample)).toEqual({
      organization: true,
      publication: false,
      grant: false,
    });
  });

  it("shows organization, publication, and grant on BioProject", () => {
    expect(getDetailFilterSupport(dbTypes.bioproject)).toEqual({
      organization: true,
      publication: true,
      grant: true,
    });
  });

  it("shows organization, publication, and grant on JGA Study", () => {
    expect(getDetailFilterSupport(dbTypes["jga-study"])).toEqual({
      organization: true,
      publication: true,
      grant: true,
    });
  });

  it.each([
    ["GEA", dbTypes.gea],
    ["JGA DAC", dbTypes["jga-dac"]],
    ["JGA Dataset", dbTypes["jga-dataset"]],
    ["JGA Policy", dbTypes["jga-policy"]],
    ["MetaboBank", dbTypes.metabobank],
    ["SRA Analysis", dbTypes["sra-analysis"]],
    ["SRA Experiment", dbTypes["sra-experiment"]],
    ["SRA Run", dbTypes["sra-run"]],
    ["SRA Sample", dbTypes["sra-sample"]],
    ["SRA Study", dbTypes["sra-study"]],
    ["SRA Submission", dbTypes["sra-submission"]],
  ])("shows organization and publication but not grant on %s", (_, currentType) => {
    expect(getDetailFilterSupport(currentType)).toEqual({
      organization: true,
      publication: true,
      grant: false,
    });
  });
});

describe("makeTypeLinkParams", () => {
  it("should remove type and page params from link params", () => {
    const result = makeTypeLinkParams({
      types: ["sra-analysis"],
      keywords: ["human"],
      page: 5,
    });
    expect((result as AnySearchParams).page).toBeUndefined();
    expect((result as AnySearchParams).types).toBeUndefined();
    expect(result.keywords).toEqual(["human"]);
  });
});

describe("shouldShowOrganismSelector", () => {
  it("keeps the selector visible while the organism facet request is not successful yet", () => {
    expect(shouldShowOrganismSelector(undefined, false)).toBe(true);
  });

  it("hides the selector when the successful organism facet result has no items", () => {
    expect(shouldShowOrganismSelector([], true)).toBe(false);
  });

  it("hides the selector when the successful organism facet result is missing", () => {
    expect(shouldShowOrganismSelector(undefined, true)).toBe(false);
  });

  it("shows the selector when the successful organism facet result has items", () => {
    expect(shouldShowOrganismSelector([{ value: "562", count: 10 }], true)).toBe(true);
  });
});
