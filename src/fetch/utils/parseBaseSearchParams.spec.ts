import { describe, expect, it } from "vitest";
import { parseBaseParams } from "@/fetch/utils/parseBaseSearchParams.ts";
import type { BaseEntryListRequestParams } from "@/api/entries/base.ts";

const expectKeyNotExists = (
  result: BaseEntryListRequestParams,
  key: keyof BaseEntryListRequestParams
) => {
  expect(key in result).toBe(false);
};

describe("parseBaseParams", () => {
  it("", () => {
    const result = parseBaseParams({});
    expectKeyNotExists(result, "page");
  });

  //page
  it("", () => {
    const result = parseBaseParams({ page: 1 });
    expect(result.page).toBe("1");
  });
  it("", () => {
    const result = parseBaseParams({ page: 2.1 });
    expect(result.page).toBe("2");
  });
  it("", () => {
    const result = parseBaseParams({ page: -1 });
    expectKeyNotExists(result, "page");
  });

  //perPage
  it("", () => {
    const result = parseBaseParams({ perPage: 10 });
    expect(result.perPage).toBe("10");
  });
  it("", () => {
    const result = parseBaseParams({ perPage: 2.1 });
    expect(result.perPage).toBe("2");
  });
  it("", () => {
    const result = parseBaseParams({ perPage: -1 });
    expectKeyNotExists(result, "perPage");
  });

  //keywords
  it("", () => {
    const result = parseBaseParams({ keywords: [] });
    expectKeyNotExists(result, "keywords");
  });

  it("", () => {
    const result = parseBaseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });

  //datePublished
  it("", () => {
    const result = parseBaseParams({ datePublished: "2025-07-01,2025-07-10" });
    expect(result.datePublished).toBe("2025-07-01,2025-07-10");
  });
  //dateUpdated
  it("", () => {
    const result = parseBaseParams({ dateUpdated: "2025-07-01,2025-07-10" });
    expect(result.dateUpdated).toBe("2025-07-01,2025-07-10");
  });
});
