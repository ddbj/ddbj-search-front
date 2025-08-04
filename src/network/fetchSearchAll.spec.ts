import { describe, expect, it } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST__fetchSearchALL } from "@/network/fetchSearchAll.ts";
import type { SearchApiParamKeys, SearchApiParams } from "@/schema/api/search.ts";

const { parseParams } = __TEST__fetchSearchALL;

const expectKeyNotExists = (result: SearchApiParams, key: SearchApiParamKeys) => {
  expect(key in result).toBe(false);
};

describe("parseParams", () => {
  it("", () => {
    const result = parseParams({});
    expectKeyNotExists(result, "types");
  });
  it("", () => {
    const result = parseParams({ types: [] });
    expectKeyNotExists(result, "types");
  });
  it("", () => {
    const result = parseParams({ types: [dbTypes.biosample, dbTypes.bioproject] });
    expect(result.types).toBe("biosample,bioproject");
  });
  //keywords
  it("", () => {
    const result = parseParams({ keywords: [] });
    expectKeyNotExists(result, "keywords");
  });
  it("", () => {
    const result = parseParams({ keywords: ["human", "cat"] });
    expect(result.keywords).toBe("human,cat");
  });
  //page
  it("", () => {
    const result = parseParams({ page: 1 });
    expect(result.page).toBe("1");
  });
  it("", () => {
    const result = parseParams({ page: 2.1 });
    expect(result.page).toBe("2");
  });
  it("", () => {
    const result = parseParams({ page: -1 });
    expectKeyNotExists(result, "page");
  });
  //perPage
  it("", () => {
    const result = parseParams({ perPage: 10 });
    expect(result.perPage).toBe("10");
  });
  it("", () => {
    const result = parseParams({ perPage: 2.1 });
    expect(result.perPage).toBe("2");
  });
  it("", () => {
    const result = parseParams({ perPage: -1 });
    expectKeyNotExists(result, "perPage");
  });
  //datePublished
  it("", () => {
    const result = parseParams({ datePublished: { start: "2025-07-01", end: "2025-07-10" } });
    expect(result.datePublished).toBe("2025-07-01,2025-07-10");
  });
  //dateUpdated
  it("", () => {
    const result = parseParams({ dateUpdated: { start: "2025-07-01", end: "2025-07-10" } });
    expect(result.dateUpdated).toBe("2025-07-01,2025-07-10");
  });
});
