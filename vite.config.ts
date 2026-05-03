import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  // Keep the placeholder root page at /index.html while emitting the SPA under /search/.
  base: "/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    // Native tsconfig path resolution breaks TanStack Router split-route imports in Vite 8 builds.
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    // The SPA entry lives at /search/index.html, so production assets must be addressable below /search/assets/.
    assetsDir: "search/assets",
    rollupOptions: {
      input: {
        index: "index.html",
        search: "search/index.html",
      },
    },
  },
});
