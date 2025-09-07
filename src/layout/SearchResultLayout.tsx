import { type ComponentProps, type FC, useMemo } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { Breadcrumbs } from "@/features/searchResult/Breadcrumbs.tsx";
import { QueryLists } from "@/features/searchResult/organisms/QueryLists.tsx";
import { Pagination } from "@/features/searchResult/Pagination.tsx";
import { QueryBuilder } from "@/features/searchResult/QueryBuilder.tsx";
import { parseResultCardProps } from "@/features/searchResult/ResultCard.tsx";
import { ResultInfo } from "@/features/searchResult/ResultInfo.tsx";
import { ResultList } from "@/features/searchResult/ResultList.tsx";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

type BreadcrumbsPath = ComponentProps<typeof Breadcrumbs>["paths"][0];

type Props = {
  updateFunctions: UpdateSearchFunctions;
  params: AnySearchParams;
  entryType: DBType | null;
  data: EntryListResponse;
};

export const SearchResultLayout: FC<Props> = ({ entryType, updateFunctions, params, data }) => {
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
        <div className={"flex flex-grow-1 flex-col gap-8 py-4"}>
          <ResultList data={(data?.items ?? []).map((item) => parseResultCardProps(item))} />
          <Pagination current={data?.page ?? 1} total={1000} params={params} />
        </div>
        <aside className={"sticky top-0 flex w-[400px] shrink-0 grow-0 flex-col gap-4 py-4"}>
          <ResultInfo took={data.took} total={data.total} />

          <QueryLists removeParam={updateFunctions.removeParam} params={params} />
        </aside>
      </div>
    </main>
  );
};
