import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["src/routeTree.gen.ts"],
  sortTailwindcss: {
    functions: ["clsx"],
  },
  sortImports: {
    newlinesBetween: false,
  },
});
