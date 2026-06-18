import { useEffect, useState } from "react";

export const SKELETON_MINIMUM_DISPLAY_MS = 300;

type MinimumSkeletonLoadingState = {
  isVisible: boolean;
  visibleSince: number | null;
};

type ResolveMinimumSkeletonLoadingParams = {
  isLoading: boolean;
  state: MinimumSkeletonLoadingState;
  now: number;
  minimumDisplayMs?: number;
};

const hiddenState: MinimumSkeletonLoadingState = {
  isVisible: false,
  visibleSince: null,
};

const isSameState = (left: MinimumSkeletonLoadingState, right: MinimumSkeletonLoadingState) => {
  return left.isVisible === right.isVisible && left.visibleSince === right.visibleSince;
};

const resolveMinimumSkeletonLoading = ({
  isLoading,
  state,
  now,
  minimumDisplayMs = SKELETON_MINIMUM_DISPLAY_MS,
}: ResolveMinimumSkeletonLoadingParams): {
  state: MinimumSkeletonLoadingState;
  hideDelayMs: number | null;
} => {
  if (isLoading) {
    return {
      state: {
        isVisible: true,
        visibleSince: state.visibleSince ?? now,
      },
      hideDelayMs: null,
    };
  }

  if (!state.isVisible || state.visibleSince === null) {
    return { state: hiddenState, hideDelayMs: null };
  }

  const elapsedMs = now - state.visibleSince;
  if (elapsedMs >= minimumDisplayMs) {
    return { state: hiddenState, hideDelayMs: null };
  }

  return {
    state,
    hideDelayMs: minimumDisplayMs - elapsedMs,
  };
};

export const useMinimumSkeletonLoading = (
  isLoading: boolean,
  minimumDisplayMs: number = SKELETON_MINIMUM_DISPLAY_MS,
) => {
  const [state, setState] = useState<MinimumSkeletonLoadingState>(() => {
    if (!isLoading) return hiddenState;
    return {
      isVisible: true,
      visibleSince: Date.now(),
    };
  });

  useEffect(() => {
    const resolved = resolveMinimumSkeletonLoading({
      isLoading,
      state,
      now: Date.now(),
      minimumDisplayMs,
    });
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    setState((prev) => (isSameState(prev, resolved.state) ? prev : resolved.state));

    if (resolved.hideDelayMs !== null) {
      timeoutId = setTimeout(() => {
        setState(hiddenState);
      }, resolved.hideDelayMs);
    }

    return () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [isLoading, minimumDisplayMs, state]);

  return state.isVisible;
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper verifies timer-free state transitions.
export const __TEST__minimumSkeletonLoading = {
  hiddenState,
  resolveMinimumSkeletonLoading,
};
