import { describe, it, expect } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST_updateFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import type { AllSearchParams } from "@/schema/search.ts";
import type { DateRange } from "@/utils/date.ts";
const { composeKeywords, composeDBTypes, composeUpdated } = __TEST_updateFunctions;

describe("composeKeywords", () => {
  it("should add keywords when none are present", () => {
    const prev: AllSearchParams = { types: [dbTypes.bioproject] };
    const result = composeKeywords(prev, ["a"]);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });
  it("should remove keywords when the input is an empty array", () => {
    const prev: AllSearchParams = { types: [dbTypes.bioproject], keywords: ["a"] };
    const result = composeKeywords(prev, []);
    const expected: AllSearchParams = { types: [dbTypes.bioproject] };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when keywords are changed", () => {
    const prev: AllSearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeKeywords(prev, ["a"]);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });
  it("should not reset the page number when keywords are cleared", () => {
    const prev: AllSearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeKeywords(prev, []);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when keywords remain empty", () => {
    const prev: AllSearchParams = { types: [dbTypes.bioproject], page: 2, keywords: ["a"] };
    const result = composeKeywords(prev, ["a"]);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });
});

describe("composeDBTypes", () => {
  it("should add types when none are present", () => {
    const prev: AllSearchParams = { keywords: ["a"] };
    const result = composeDBTypes(prev, [dbTypes.bioproject]);
    const expected: AllSearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should remove types when the input is an empty array", () => {
    const prev: AllSearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
    };
    const result = composeDBTypes(prev, []);
    const expected: AllSearchParams = { keywords: ["a"] };
    expect(result).toEqual(expected);
  });

  it("should reset the page number when types are changed", () => {
    const prev: AllSearchParams = { keywords: ["a"], page: 2 };
    const result = composeDBTypes(prev, [dbTypes.bioproject]);
    const expected: AllSearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should not reset the page number when types are cleared", () => {
    const prev: AllSearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeDBTypes(prev, []);
    const expected: AllSearchParams = {
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });

  it("should preserve params when types are not changed", () => {
    const prev: AllSearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeDBTypes(prev, [dbTypes.bioproject]);
    const expected: AllSearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeUpdated", () => {
  it("should add dateUpdated when none is present", () => {
    const prev: AllSearchParams = { types: [dbTypes.bioproject] };
    const newDate: DateRange = { from: "2024/01/01", to: "2024/01/31" };
    const result = composeUpdated(prev, newDate);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2024/01/01-2024/01/31",
    };
    expect(result).toEqual(expected);
  });

  it("should change an existing dateUpdated", () => {
    const prev: AllSearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2023/01/01-2023/01/31",
    };
    const newDate: DateRange = { from: "2024/01/01", to: "2024/01/31" };
    const result = composeUpdated(prev, newDate);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2024/01/01-2024/01/31",
    };
    expect(result).toEqual(expected);
  });

  it("should remove dateUpdated when null is provided", () => {
    const prev: AllSearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2023/01/01-2023/01/31",
    };
    const result = composeUpdated(prev, null);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when dateUpdated is changed", () => {
    const prev: AllSearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const newDate: DateRange = { from: "2024/01/01", to: "2024/01/31" };
    const result = composeUpdated(prev, newDate);
    const expected: AllSearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      dateUpdated: "2024/01/01-2024/01/31",
    };
    expect(result).toEqual(expected);
  });
});
