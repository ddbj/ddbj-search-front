import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const urlPrefix = process.env.DDBJ_SEARCH_FRONT_URL_PREFIX || "/search";
const isDev = process.env.DDBJ_SEARCH_ENV === "dev";
const baseUrl = process.env.DDBJ_SEARCH_BASE_URL || "https://ddbj.nig.ac.jp";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: urlPrefix,
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
    proxy: isDev
      ? {
          [`${urlPrefix}/resources`]: {
            target: baseUrl,
            changeOrigin: true,
          },
        }
      : undefined,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  define: {
    DDBJ_SEARCH_BASE_URL: JSON.stringify(isDev ? "" : baseUrl),
    DDBJ_SEARCH_FRONT_URL_PREFIX: JSON.stringify(urlPrefix),
  },
}));
