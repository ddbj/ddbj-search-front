import { describe, expect, it } from "vitest";
import { isAnySearchParamsKey } from "@/schema/search/any.ts";
describe("isAnySearchParamsKey", () => {
  it("returns true for keywords", () => {
    const result = isAnySearchParamsKey("keywords");
    expect(result).toBe(true);
  });
  it("returns true for organism", () => {
    const result = isAnySearchParamsKey("organism");
    expect(result).toBe(true);
  });
  it("returns true for page", () => {
    const result = isAnySearchParamsKey("page");
    expect(result).toBe(true);
  });
  it("returns true for types", () => {
    const result = isAnySearchParamsKey("types");
    expect(result).toBe(true);
  });
  it("returns true for grant", () => {
    const result = isAnySearchParamsKey("grant");
    expect(result).toBe(true);
  });
  it("returns true for publication", () => {
    const result = isAnySearchParamsKey("publication");
    expect(result).toBe(true);
  });
  it("returns true for objectTypes", () => {
    const result = isAnySearchParamsKey("objectTypes");
    expect(result).toBe(true);
  });
  it("returns false for umbrella", () => {
    const result = isAnySearchParamsKey("umbrella");
    expect(result).toBe(false);
  });
  it("returns false for price", () => {
    const result = isAnySearchParamsKey("price");
    expect(result).toBe(false);
  });
});
