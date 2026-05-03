import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import type { Connect, Plugin } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const searchSpaFallback = (): Plugin => ({
  name: "search-spa-fallback",
  configureServer(server) {
    return () => {
      server.middlewares.use(searchSpaFallbackMiddleware);
    };
  },
  configurePreviewServer(server) {
    return () => {
      server.middlewares.use(searchSpaFallbackMiddleware);
    };
  },
});

const searchSpaFallbackMiddleware: Connect.NextHandleFunction = (req, _res, next) => {
  const requestUrl = getOriginalUrl(req);
  if (shouldRewriteToSearchIndex(req, requestUrl)) {
    req.url = "/search/index.html";
  }
  next();
};

const getOriginalUrl = (req: Connect.IncomingMessage) => {
  return (req as Connect.IncomingMessage & { originalUrl?: string }).originalUrl ?? req.url ?? "";
};

const shouldRewriteToSearchIndex = (req: Connect.IncomingMessage, requestUrl: string) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return false;
  }

  const acceptsHtml =
    req.headers.accept === undefined ||
    req.headers.accept === "" ||
    req.headers.accept.includes("text/html") ||
    req.headers.accept.includes("*/*");
  if (!acceptsHtml) {
    return false;
  }

  const pathname = decodePathname(requestUrl);
  if (pathname === null || !pathname.startsWith("/search")) {
    return false;
  }

  return pathname === "/search" || !pathname.includes(".");
};

const decodePathname = (requestUrl: string) => {
  try {
    return decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  } catch {
    return null;
  }
};

// https://vite.dev/config/
export default defineConfig({
  // Keep the placeholder root page at /index.html while emitting the SPA under /search/.
  base: "/",
  appType: "mpa",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    // Native tsconfig path resolution breaks TanStack Router split-route imports in Vite 8 builds.
    tsconfigPaths(),
    tailwindcss(),
    searchSpaFallback(),
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
