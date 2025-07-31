import { describe, it, expect } from "vitest";
import { __HOME_PAGE_TEST__ } from "@/layout/HomePage.tsx";
const { makeNavigateArgs } = __HOME_PAGE_TEST__;

describe("makeNavigateArgs", () => {
  it("should return {to:'all'} when types are not specified", () => {
    const { to, search } = makeNavigateArgs([], []);
    expect(to).toBe("/entry");
    expect(search).toEqual({});
  });
  it("should return {to:'/bioproject'} with single type and keywords", () => {
    const { to, search } = makeNavigateArgs(["bioproject"], ["human"]);
    expect(to).toBe("/entry/bioproject");
    expect(search).toEqual({ keywords: ["human"] });
  });
  it("should return {to:'/all'} with multiple types", () => {
    const { to, search } = makeNavigateArgs(["bioproject", "sra-run", "biosample"], ["human"]);
    expect(to).toBe("/entry");
    expect(search).toEqual({ keywords: ["human"], types: ["bioproject", "sra-run", "biosample"] });
  });
});
