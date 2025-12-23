import { QueryClient } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Providers } from "./providers.tsx";
import { routeTree } from "../src/routeTree.gen.ts";
import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/index.css";

const history = createMemoryHistory();
const fileBaseRouter = createRouter({
  routeTree,
  history,
  basepath: "/search",
  context: { queryClient: new QueryClient() },
});
type RouterType = typeof fileBaseRouter;

declare global {
  interface Window {
    __STORYBOOK_ROUTER__?: RouterType;
  }
}

const RouterDecorator: Decorator = (Story) => {
  const rootRoute = createRootRoute({
    component: () => (
      <>
        <Story />
        <TanStackRouterDevtools />
      </>
    ),
  });
  rootRoute.addChildren([]);
  const routeTree = rootRoute;
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const router = createRouter({
    routeTree,
    history,
    defaultComponent: () => <Story />,
    defaultErrorComponent: () => <Story />,
  });
  // eslint-disable-next-line
  window.__STORYBOOK_ROUTER__ = router as any as RouterType;
  return <RouterProvider router={router} />;
};

const preview: Preview = {
  decorators: [
    RouterDecorator,
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
