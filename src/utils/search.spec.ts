import { describe, expect, it } from "vitest";
import { removeFromSearch } from "@/utils/search.ts";
import type { GlobalSearchSchemaType } from "@/schema/search.ts";

describe("removeFromSearch", () => {
  describe("emptyObject", () => {
    const current: GlobalSearchSchemaType = {};
    it("", () => {
      const result = removeFromSearch(current, "keywords", "");
      expect(result).not.toBe(current);
      expect(result).toEqual({});
    });
  });
  describe("withParams", () => {
    const current: GlobalSearchSchemaType = {
      keywords: ["human ", " cat"],
      types: ["sra-analysis", "jga-study"],
      datePublished: { start: "2025-07-01", end: "2025-07-10" },
      dateUpdated: { start: "2024-07-01", end: "2024-07-10" },
    };
    it("", () => {
      const result = removeFromSearch(current, "keywords", "cat");
      expect(result.keywords).toEqual(["human "]);
    });
    it("", () => {
      const result = removeFromSearch(current, "types", "sra-analysis");
      expect(result.keywords).toEqual(["human ", " cat"]);
      expect(result.types).toEqual(["jga-study"]);
    });
    it("", () => {
      const result = removeFromSearch(current, "datePublished", "");
      expect(result.datePublished).toBeFalsy();
    });
    it("", () => {
      const result = removeFromSearch(current, "dateUpdated", "");
      expect(result.dateUpdated).toBeFalsy();
    });
  });
});
