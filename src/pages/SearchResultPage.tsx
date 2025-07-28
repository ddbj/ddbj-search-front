import { useRouterState } from "@tanstack/react-router";
import { type ComponentProps, useMemo } from "react";
import { dbLabels, type DBType, isDBType } from "@/consts.ts";
import { Breadcrumbs } from "@/features/searchResult/Breadcrumbs.tsx";
import { QueryBuilder } from "@/features/searchResult/QueryBuilder.tsx";

type BreadcrumbsPath = ComponentProps<typeof Breadcrumbs>["paths"][0];
export const SearchResultPage = () => {
  const routerState = useRouterState();
  const searchType: DBType | undefined = useMemo(() => {
    const pathName = routerState.location.pathname;
    const type = pathName.split("/")[3];
    return isDBType(type) ? type : undefined;
  }, [routerState]);
  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    return searchType
      ? [{ label: "Entries", to: "/entry" }, { label: dbLabels[searchType] }]
      : [{ label: "Entries" }];
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
