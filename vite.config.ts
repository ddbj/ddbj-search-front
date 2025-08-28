import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/search",

  server: {
    port: 5137,
    proxy: {
      ...{
        "/mockServiceWorker.js": {
          target: "http://localhost:5137", // Adjust target URL if needed
          rewrite: () => "/search/mockServiceWorker.js",
        },
      },
    },
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
});
