import type { Preview } from "@storybook/react";
import "../src/styles/index.css";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/" });
const memoryHistory = createMemoryHistory({ initialEntries: ["/"] });
const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree, history: memoryHistory });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    router: {},
  },
  decorators: [
    (Story) => {
      return <RouterProvider router={router} defaultComponent={() => <Story />} />;
    },
  ],
};

export default preview;
