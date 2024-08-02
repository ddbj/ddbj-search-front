import { describe, expect, test } from "vitest";
import { __test__ } from "@/components/ui/result/Pagination.tsx";
const { makePaginationPages, dividePages } = __test__;

describe("makePaginationPages", () => {
  describe("when total is 10", () => {
    test("should work", () => {
      const result = makePaginationPages(10, 1);
      expect(result).toEqual([1, 2, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 2);
      expect(result).toEqual([1, 2, 3, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 3);
      expect(result).toEqual([1, 2, 3, 4, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 4);
      expect(result).toEqual([1, 3, 4, 5, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 5);
      expect(result).toEqual([1, 4, 5, 6, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 6);
      expect(result).toEqual([1, 5, 6, 7, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 7);
      expect(result).toEqual([1, 6, 7, 8, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 8);
      expect(result).toEqual([1, 7, 8, 9, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 9);
      expect(result).toEqual([1, 8, 9, 10]);
    });
    test("should work", () => {
      const result = makePaginationPages(10, 10);
      expect(result).toEqual([1, 9, 10]);
    });
  });
  describe("when total is 2", () => {
    test("should work", () => {
      const result = makePaginationPages(2, 1);
      expect(result).toEqual([1, 2]);
    });
  });
});

describe("dividePages", () => {
  test("should work", () => {
    const result = dividePages([1, 2, 10]);
    expect(result).toEqual([[1, 2], [10]]);
  });
  test("should work", () => {
    const result = dividePages([1, 2, 3, 4]);
    expect(result).toEqual([[1, 2, 3, 4]]);
  });
  test("should work", () => {
    const result = dividePages([1, 7, 8, 9, 10]);
    expect(result).toEqual([[1], [7, 8, 9, 10]]);
  });
});
