import { describe, expect, it } from "vitest";
import {
  __TEST__minimumSkeletonLoading,
  SKELETON_MINIMUM_DISPLAY_MS,
} from "@/features/searchResult/result/useMinimumSkeletonLoading.ts";

const { hiddenState, resolveMinimumSkeletonLoading } = __TEST__minimumSkeletonLoading;

describe("resolveMinimumSkeletonLoading", () => {
  it("does not force skeleton when loading is false from the beginning", () => {
    const result = resolveMinimumSkeletonLoading({
      isLoading: false,
      state: hiddenState,
      now: 1000,
    });

    expect(result).toEqual({
      state: hiddenState,
      hideDelayMs: null,
    });
  });

  it("starts showing skeleton when loading begins", () => {
    const result = resolveMinimumSkeletonLoading({
      isLoading: true,
      state: hiddenState,
      now: 1000,
    });

    expect(result).toEqual({
      state: {
        isVisible: true,
        visibleSince: 1000,
      },
      hideDelayMs: null,
    });
  });

  it("keeps skeleton visible until the minimum display time has passed", () => {
    const visibleState = {
      isVisible: true,
      visibleSince: 1000,
    };
    const result = resolveMinimumSkeletonLoading({
      isLoading: false,
      state: visibleState,
      now: 1200,
    });

    expect(result).toEqual({
      state: visibleState,
      hideDelayMs: SKELETON_MINIMUM_DISPLAY_MS - 200,
    });
  });

  it("hides skeleton immediately after the minimum display time has passed", () => {
    const result = resolveMinimumSkeletonLoading({
      isLoading: false,
      state: {
        isVisible: true,
        visibleSince: 1000,
      },
      now: 1300,
    });

    expect(result).toEqual({
      state: hiddenState,
      hideDelayMs: null,
    });
  });
});
