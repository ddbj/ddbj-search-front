import { useRouterState } from "@tanstack/react-router";
import { type ComponentProps, useMemo } from "react";
import { Breadcrumbs } from "@/components/organisms/Breadcrumbs.tsx";
import { QueryBuilder } from "@/components/organisms/QueryBuilder.tsx";
import { dbLabels, type DBType, isDBType } from "@/consts.ts";

type BreadcrumbsPath = ComponentProps<typeof Breadcrumbs>["paths"][0];
export const SearchResultPage = () => {
  const routerState = useRouterState();
  const searchType: DBType | undefined = useMemo(() => {
    const pathName = routerState.location.pathname;
    const type = pathName.split("/")[1];
    return isDBType(type) ? type : undefined;
  }, [routerState]);
  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    const label = searchType ? dbLabels[searchType] : "All";
    const to = undefined;
    return [{ label, to }];
  }, [searchType]);
  return (
    <main className={"flex flex-col gap-4"}>
      <aside className={"p-4"}>
        <Breadcrumbs paths={breadcrumbsPaths} />
        <QueryBuilder currentType={searchType}></QueryBuilder>
      </aside>
      <section></section>
    </main>
  );
};
