import { ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { isMSWEnabled } from "@/lib/env/parseEnvVariables.ts";
import "./index.css";
import { routeTree } from "@/routeTree.gen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

// Create a new router instance
// const originalReplaceState = window.history.replaceState;
export const router = createRouter({
  routeTree,
  basepath: "/search",
  context: { queryClient },
  scrollRestoration: true,
  // getScrollRestorationKey: (location) => {
  //   const key = location.pathname;
  //   console.log(key);
  //   return "";
  // },
  defaultPreload: "intent",
  defaultHashScrollIntoView: false,
  trailingSlash: "always",
});
// window.history.replaceState = originalReplaceState;

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

async function enableMocking() {
  if (!isMSWEnabled) {
    return;
  }
  const { worker } = await import("./msw/browser");
  return worker.start({
    serviceWorker: {
      url: `/mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ToastProvider />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
});
