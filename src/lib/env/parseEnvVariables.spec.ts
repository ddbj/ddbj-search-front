import { afterEach, describe, expect, it, vi } from "vitest";

const importEnvVariables = async () => {
  vi.resetModules();
  return import("./parseEnvVariables.ts");
};

describe("parseEnvVariables", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("enables MSW only when VITE_MSW is true", async () => {
    vi.stubEnv("VITE_MSW", "true");

    const { isMSWEnabled } = await importEnvVariables();

    expect(isMSWEnabled).toBe(true);
  });

  it("handles VITE_MSW value case-insensitively", async () => {
    vi.stubEnv("VITE_MSW", "TRUE");

    const { isMSWEnabled } = await importEnvVariables();

    expect(isMSWEnabled).toBe(true);
  });

  it("disables MSW when VITE_MSW is not true", async () => {
    vi.stubEnv("VITE_MSW", "false");

    const { isMSWEnabled } = await importEnvVariables();

    expect(isMSWEnabled).toBe(false);
  });

  it("exposes VITE_API_PATH", async () => {
    vi.stubEnv("VITE_API_PATH", "https://example.com/search/api/");

    const { envApiPath } = await importEnvVariables();

    expect(envApiPath).toBe("https://example.com/search/api/");
  });
});
