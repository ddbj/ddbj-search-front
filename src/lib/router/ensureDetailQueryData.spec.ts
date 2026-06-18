import { isNotFound } from "@tanstack/react-router";
import { describe, expect, it, vi } from "vitest";
import { AppHttpError } from "@/lib/fetch/http/httpError.ts";
import { ensureDetailQueryData } from "@/lib/router/ensureDetailQueryData.ts";

describe("ensureDetailQueryData", () => {
  it("should resolve when ensureQueryData succeeds", async () => {
    const ensureQueryData = vi.fn().mockResolvedValue(undefined);
    const queryClient = { ensureQueryData };
    const queryOptions = { queryKey: ["detail"] };

    await expect(ensureDetailQueryData(queryClient, queryOptions)).resolves.toBeUndefined();
    expect(ensureQueryData).toHaveBeenCalledWith(queryOptions);
  });

  it("should convert AppHttpError 404 into a router notFound error", async () => {
    const ensureQueryData = vi
      .fn()
      .mockRejectedValue(
        new AppHttpError("missing", { status: 404, statusText: "Not Found", url: "" }),
      );

    await expect(
      ensureDetailQueryData({ ensureQueryData }, { queryKey: ["detail"] }),
    ).rejects.toSatisfy((error: unknown) => isNotFound(error));
  });

  it("should rethrow non-404 errors", async () => {
    const error = new AppHttpError("failed", { status: 500, statusText: "Error", url: "" });
    const ensureQueryData = vi.fn().mockRejectedValue(error);

    await expect(ensureDetailQueryData({ ensureQueryData }, { queryKey: ["detail"] })).rejects.toBe(
      error,
    );
  });
});
