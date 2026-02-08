import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { DetailPage } from "@/pages/DetailPage.tsx";
import { IndexPage } from "@/pages/IndexPage.tsx";
import { URL_PREFIX } from "@/constants.ts";
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
  path: URL_PREFIX,
  component: IndexPage,
});

const entryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `${URL_PREFIX}/entry/$type/$id`,
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
