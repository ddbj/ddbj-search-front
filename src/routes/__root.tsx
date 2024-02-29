import { createRootRoute, Outlet } from "@tanstack/react-router";
import React from "react";
import { AppIntlProvider } from "@/providers/AppIntlProvider.tsx";

export const Route = createRootRoute({
  component: () => (
    <AppIntlProvider>
      <Outlet />
      {/*<TanStackRouterDevtools />*/}
    </AppIntlProvider>
  ),
});
