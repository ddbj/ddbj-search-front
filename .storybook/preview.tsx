import { createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { Providers } from "../src/components/providers.tsx";
import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/index.css";

declare global {
  interface Window {
    // eslint-disable-next-line
    __STORYBOOK_ROUTER__?: import("@tanstack/react-router").Router<any>;
  }
}

const RouterDecorator: Decorator = (Story) => {
  const rootRoute = createRootRoute({ component: () => <Story /> });
  const routeTree = rootRoute;
  const router = createRouter({ routeTree });
  window.__STORYBOOK_ROUTER__ = router;
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
