import { type ComponentProps, type FC, useMemo } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { Breadcrumbs } from "@/features/searchResult/Breadcrumbs.tsx";
import { QueryLists } from "@/features/searchResult/organisms/QueryLists.tsx";
import { Pagination } from "@/features/searchResult/Pagination.tsx";
import { QueryBuilder } from "@/features/searchResult/QueryBuilder.tsx";
import { ResultInfo } from "@/features/searchResult/ResultInfo.tsx";
import { ResultList } from "@/features/searchResult/ResultList.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import type { AllSearchParams } from "@/schema/search.ts";

type BreadcrumbsPath = ComponentProps<typeof Breadcrumbs>["paths"][0];

type Props = {
  updateFunctions: UpdateSearchFunctions;
  params: AllSearchParams;
  entryType: DBType | null;
};

export const SearchResultLayout: FC<Props> = ({ entryType, updateFunctions, params }) => {
  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    return entryType
      ? [{ label: "Entries", to: "/entry" }, { label: dbLabels[entryType] }]
      : [{ label: "Entries" }];
  }, [entryType]);
  return (
    <main className={"p-4"}>
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className={"relative flex items-start gap-4"}>
        <aside className={"sticky top-0 py-4"}>
          <QueryBuilder
            currentType={entryType}
            update={updateFunctions}
            params={params}
          ></QueryBuilder>
        </aside>
        <div className={"flex-grow-1 py-4"}>
          <ResultList />
        </div>
        <aside className={"sticky top-0 flex w-[400px] shrink-0 grow-0 flex-col gap-4 py-4"}>
          <ResultInfo />
          <Pagination current={1} total={1000} setPage={() => {}} />
          <QueryLists removeParam={updateFunctions.removeParam} params={params} />
        </aside>
      </div>
    </main>
  );
};
