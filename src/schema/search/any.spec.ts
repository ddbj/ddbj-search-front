import { describe, expect, it } from "vitest";
import { isAnySearchParamsKey } from "@/schema/search/any.ts";
describe("isAnySearchParamsKey", () => {
  it("", () => {
    const result = isAnySearchParamsKey("keywords");
    expect(result).toBe(true);
  });
  it("", () => {
    const result = isAnySearchParamsKey("organism");
    expect(result).toBe(true);
  });
  it("", () => {
    const result = isAnySearchParamsKey("page");
    expect(result).toBe(true);
  });
  it("", () => {
    const result = isAnySearchParamsKey("types");
    expect(result).toBe(true);
  });
  it("", () => {
    const result = isAnySearchParamsKey("grant");
    expect(result).toBe(true);
  });
  it("", () => {
    const result = isAnySearchParamsKey("objectTypes");
    expect(result).toBe(true);
  });
  it("", () => {
    const result = isAnySearchParamsKey("umbrella");
    expect(result).toBe(false);
  });
  it("", () => {
    const result = isAnySearchParamsKey("price");
    expect(result).toBe(false);
  });
});
