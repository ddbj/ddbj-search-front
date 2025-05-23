import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/search",
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${__dirname}/src/` },
      { find: /^~/, replacement: `${__dirname}/node_modules/` },
    ],
  },
  build: {
    rollupOptions: {
      plugins: [
        mode === "analyze" &&
          visualizer({
            open: true,
            filename: "dist/stats.html",
            gzipSize: true,
            brotliSize: true,
          }),
      ],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  define: {
    DDBJ_SEARCH_BASE_URL: JSON.stringify("https://ddbj.nig.ac.jp"),
    // DDBJ_SEARCH_BASE_URL: JSON.stringify("https://ddbj-staging.nig.ac.jp"),
  },
}));
