import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { isAppHttpError } from "@/fetch/utils/httpError.ts";
import { RouteErrorPage } from "@/layout/RouteErrorPage.tsx";

export type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: RootNotFoundComponent,
  errorComponent: RootErrorComponent,
});

const getRootErrorPageCopy = (error: unknown) => {
  if (isAppHttpError(error) && error.status >= 500) {
    return {
      title: "Server Error",
      description:
        "The server returned an error while loading this page. You can try again or return to a stable page.",
    };
  }

  return {
    title: "Unexpected Error",
    description:
      "An unexpected error occurred while loading this page. You can try again or return to a stable page.",
  };
};

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
      statusCode={404}
      title={"Page Not Found"}
      description={
        "The page you requested does not exist or is not available from the current route."
      }
    />
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  const { title, description } = getRootErrorPageCopy(error);

  return (
    <RouteErrorPage
      statusCode={500}
      title={title}
      description={description}
      error={error}
      actionLabel={"Try again"}
      onAction={reset}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with root route error mapping.
export const __TEST__RootRoute = {
  getRootErrorPageCopy,
};
