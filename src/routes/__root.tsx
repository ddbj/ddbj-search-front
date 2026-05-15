import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet,
  type ErrorComponentProps,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { isAppHttpError } from "@/fetch/utils/httpError.ts";
import { HomePage } from "@/layout/HomePage.tsx";
import { RouteErrorPage } from "@/layout/RouteErrorPage.tsx";

export type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: RootNotFoundComponent,
  errorComponent: RootErrorComponent,
});

const getRootErrorPageModel = (error: unknown) => {
  if (isAppHttpError(error) && error.status >= 500) {
    return {
      statusCode: error.status,
      title: "Server Error",
      description:
        "The server returned an error while loading this page. You can try again or return to a stable page.",
    };
  }

  return {
    statusCode: isAppHttpError(error) ? error.status : undefined,
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
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname === "/index.html" || pathname === "/index.html/") {
    return <HomePage />;
  }

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
  const { statusCode, title, description } = getRootErrorPageModel(error);

  return (
    <RouteErrorPage
      statusCode={statusCode}
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
  getRootErrorPageModel,
};
