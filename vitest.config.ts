import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.spec.ts"],
    globals: true,
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${__dirname}/src/` },
      { find: /^~/, replacement: `${__dirname}/node_modules/` },
    ],
  },
});
