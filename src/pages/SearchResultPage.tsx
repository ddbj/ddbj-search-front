import { useRouterState } from "@tanstack/react-router";
import { type ComponentProps, useMemo } from "react";
import { dbLabels, type DBType, isDBType } from "@/consts/db.ts";
import { Breadcrumbs } from "@/features/searchResult/Breadcrumbs.tsx";
import { QueryLists } from "@/features/searchResult/organisms/QueryLists.tsx";
import { Pagination } from "@/features/searchResult/Pagination.tsx";
import { QueryBuilder } from "@/features/searchResult/QueryBuilder.tsx";
import { ResultInfo } from "@/features/searchResult/ResultInfo.tsx";
import { ResultList } from "@/features/searchResult/ResultList.tsx";

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
    <main className={"p-4"}>
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className={"relative flex items-start gap-4"}>
        <aside className={"sticky top-0 py-4"}>
          <QueryBuilder currentType={searchType}></QueryBuilder>
        </aside>
        <div className={"flex-grow-1 py-4"}>
          <ResultList />
        </div>
        <aside className={"sticky top-0 flex w-[400px] shrink-0 grow-0 flex-col gap-4 py-4"}>
          <ResultInfo />
          <Pagination current={1} total={1000} setPage={() => {}} />
          <QueryLists />
        </aside>
      </div>
    </main>
  );
};
