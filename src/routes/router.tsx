import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { DetailPage } from "@/pages/DetailPage.tsx";
import { IndexPage } from "@/pages/IndexPage.tsx";
import { fetchDetail } from "@/utils/fetchDetail.ts";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: IndexPage,
});

const entryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search/entry/$type/$id",
  component: DetailPage,
  loader: async ({ params: { id, type } }) => fetchDetail(type, id),
});

const routeTree = rootRoute.addChildren([indexRoute, entryRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }
