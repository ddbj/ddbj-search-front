import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/search/",
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${__dirname}/src/` },
      { find: /^~/, replacement: `${__dirname}/node_modules/` },
    ],
  },
});
