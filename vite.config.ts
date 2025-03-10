import fs from "fs";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const insideDockerContainer = fs.existsSync("/.dockerenv")

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
    host: insideDockerContainer ? "0.0.0.0" : "127.0.0.1",
    port: 3000,
  },
  preview: {
    host: insideDockerContainer ? "0.0.0.0" : "127.0.0.1",
    port: 3000,
  },
  define: {
    DDBJ_SEARCH_BASE_URL: JSON.stringify(process.env.DDBJ_SEARCH_BASE_URL || "https://ddbj.nig.ac.jp"),
  }
}));
