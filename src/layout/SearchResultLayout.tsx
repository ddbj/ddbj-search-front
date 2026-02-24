import { type FC, useMemo } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { QueryBuilder } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import { Pagination } from "@/features/searchResult/result/Pagination.tsx";
import { parseResultCardProps } from "@/features/searchResult/result/ResultCard.tsx";
import { ResultInfo } from "@/features/searchResult/result/ResultInfo.tsx";
import { ResultList } from "@/features/searchResult/result/ResultList.tsx";
import { type BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

type Props = {
  updateFunctions: UpdateSearchFunctions;
  params: AnySearchParams;
  entryType: DBType | null;
  data: EntryListResponse;
};

export const SearchResultLayout: FC<Props> = ({ entryType, updateFunctions, params, data }) => {
  const pagination = data.pagination;
  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    return entryType
      ? [{ label: "Entries", to: "/entry" }, { label: dbLabels[entryType] }]
      : [{ label: "Entries" }];
  }, [entryType]);
  return (
    <main className={"p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"relative flex items-start gap-4"}>
        <aside className={"sticky top-0 py-4"}>
          <QueryBuilder
            currentType={entryType}
            update={updateFunctions}
            params={params}
          ></QueryBuilder>
        </aside>
        <div className={"flex-grow-1"}>
          <aside className={"sticky top-0 flex flex-col gap-4"}>
            <ResultInfo
              removeParamFunc={updateFunctions.removeParam}
              changeSortFunc={updateFunctions.changeSort}
              searchParams={params}
              currentPage={pagination?.page ?? 1}
              perPage={pagination.perPage ?? 20}
              itemCount={pagination.total ?? 0}
            />
          </aside>
          <div className={"flex flex-grow-1 flex-col gap-8 py-4"}>
            <ResultList data={(data?.items ?? []).map((item) => parseResultCardProps(item))} />
            <Pagination
              searchParams={params}
              current={pagination?.page ?? 1}
              itemCount={pagination.total ?? 0}
              perPage={pagination.perPage ?? 20}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
