import { describe, expect, it } from "vitest";
import { getTotalPages } from "@/utils/getTotalPages.ts";

describe("getTotalPages", () => {
  it("should return the correct total pages", () => {
    const totalPages = getTotalPages(100, 10);
    expect(totalPages).toBe(10);
  });
  it("should return 1 when total is 0", () => {
    const totalPages = getTotalPages(0, 10);
    expect(totalPages).toBe(1);
  });
});
