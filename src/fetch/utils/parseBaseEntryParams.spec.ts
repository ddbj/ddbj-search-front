import { describe, expect, it } from "vitest";
import { parseBaseEntryParams } from "@/fetch/utils/parseBaseEntryParams.ts";
import type { BaseEntryListRequestParams } from "@/api/entries/base.ts";

const expectKeyNotExists = (
  result: BaseEntryListRequestParams,
  key: keyof BaseEntryListRequestParams
) => {
  expect(key in result).toBe(false);
};

const expectDefault = (result: BaseEntryListRequestParams) => {
  expect(result.dbXrefsLimit).toBe("0");
  expect(result.includeFacets).toBe("false");
  expect(result.includeProperties).toBe("false");
};

describe("parseBaseParams", () => {
  it("", () => {
    const result = parseBaseEntryParams({});
    expectKeyNotExists(result, "page");
    expectDefault(result);
  });

  //page
  it("", () => {
    const result = parseBaseEntryParams({ page: 1 });
    expect(result.page).toBe("1");
    expectDefault(result);
  });
  it("", () => {
    const result = parseBaseEntryParams({ page: 2.1 });
    expect(result.page).toBe("2");
    expectDefault(result);
  });
  it("", () => {
    const result = parseBaseEntryParams({ page: -1 });
    expectKeyNotExists(result, "page");
    expectDefault(result);
  });

  //perPage
  it("", () => {
    const result = parseBaseEntryParams({ perPage: 10 });
    expect(result.perPage).toBe("10");
    expectDefault(result);
  });
  it("", () => {
    const result = parseBaseEntryParams({ perPage: 2.1 });
    expect(result.perPage).toBe("2");
    expectDefault(result);
  });
  it("", () => {
    const result = parseBaseEntryParams({ perPage: -1 });
    expectKeyNotExists(result, "perPage");
    expectDefault(result);
  });

  //keywords
  it("", () => {
    const result = parseBaseEntryParams({ keywords: [] });
    expectKeyNotExists(result, "keywords");
    expectDefault(result);
  });

  it("", () => {
    const result = parseBaseEntryParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
    expectDefault(result);
  });

  //datePublished
  it("", () => {
    const result = parseBaseEntryParams({ datePublishedFrom: "2025-07-01" });
    expect(result.datePublishedFrom).toBe("2025-07-01");
    expectDefault(result);
  });
  it("", () => {
    const result = parseBaseEntryParams({ datePublishedTo: "2025-07-01" });
    expect(result.datePublishedTo).toBe("2025-07-01");
    expectDefault(result);
  });

  //dateUpdated
  it("", () => {
    const result = parseBaseEntryParams({ dateModifiedFrom: "2025-07-01" });
    expect(result.dateModifiedFrom).toBe("2025-07-01");
    expectDefault(result);
  });
  it("", () => {
    const result = parseBaseEntryParams({ dateModifiedTo: "2025-07-01" });
    expect(result.dateModifiedTo).toBe("2025-07-01");
    expectDefault(result);
  });
});
