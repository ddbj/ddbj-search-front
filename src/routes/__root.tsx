import {
  createRootRouteWithContext,
  Outlet,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  RouteErrorPage,
  routeErrorPageActionButtonClasses,
} from "@/layout/RouteErrorPage.tsx";
import type { QueryClient } from "@tanstack/react-query";

export type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: RootNotFoundComponent,
  errorComponent: RootErrorComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

function RootNotFoundComponent() {
  return (
    <RouteErrorPage
      title={"Page not found"}
      description={
        "The page you requested does not exist or is not available from the current route."
      }
    />
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <RouteErrorPage
      title={"Unexpected error"}
      description={
        "An unexpected error occurred while loading this page. You can try again or return to a stable page."
      }
      error={error}
      action={
        <button type={"button"} onClick={reset} className={routeErrorPageActionButtonClasses}>
          Try again
        </button>
      }
    />
  );
}
