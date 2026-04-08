import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig, defineProject, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        // ユニットテスト用のプロジェクト
        defineProject({
          test: {
            name: "unit",
            include: ["**/*.spec.ts", "**/*.spec.tsx"],
            environment: "node",
          },
          resolve: {
            alias: {
              "@": path.resolve(dirname, "./src"),
            },
          },
        }),
        // Storybookテスト用のプロジェクト
        defineProject({
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: path.join(dirname, ".storybook"),
              // This should match your package.json script to run Storybook
              // The --no-open flag will skip the automatic opening of a browser
              storybookScript: "pnpm storybook --no-open",
            }),
          ],
          test: {
            name: "storybook",
            // Enable browser mode
            browser: {
              enabled: true,
              // Keep Playwright as a direct dependency while story play functions are
              // executed through @vitest/browser-playwright in this project.
              provider: playwright({}),
              headless: true,
              instances: [{ browser: "chromium" }],
            },
          },
        }),
      ],
    },
  }),
);
