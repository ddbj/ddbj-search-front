import { type FC, useMemo } from "react";
import type { EntryListResponse } from "@/api/entries/base.ts";
import { dbLabels, type DBType } from "@/consts/db.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { UpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryBuilder } from "@/views/searchResult/components/queryBuilder/QueryBuilder.tsx";
import { Pagination } from "@/views/searchResult/components/result/Pagination.tsx";
import { parseResultCardProps } from "@/views/searchResult/components/result/resultCardUtils.ts";
import { ResultInfo } from "@/views/searchResult/components/result/ResultInfo.tsx";
import { ResultList } from "@/views/searchResult/components/result/ResultList.tsx";
import { useMinimumSkeletonLoading } from "@/views/searchResult/components/result/useMinimumSkeletonLoading.ts";
import { type BreadcrumbsPath } from "@/views/shared/components/Breadcrumbs.tsx";
import { GlobalHeader } from "@/views/shared/components/GlobalHeader.tsx";

type Props = {
  updateFunctions: UpdateSearchFunctions;
  params: AnySearchParams;
  entryType: DBType | null;
  data: EntryListResponse;
  isLoading?: boolean;
};

export const SearchResultView: FC<Props> = ({
  entryType,
  updateFunctions,
  params,
  data,
  isLoading = false,
}) => {
  const pagination = data.pagination;
  const isSkeletonLoading = useMinimumSkeletonLoading(isLoading);
  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    return entryType
      ? [{ label: "Entries", to: "/entry" }, { label: dbLabels[entryType] }]
      : [{ label: "Entries" }];
  }, [entryType]);
  return (
    <main className={"p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"relative flex items-start gap-4"}>
        <aside className={"top-0 shrink-0 py-4"}>
          <QueryBuilder
            currentType={entryType}
            update={updateFunctions}
            params={params}
          ></QueryBuilder>
        </aside>
        <div className={"min-w-0 flex-1"}>
          <aside className={"sticky top-0 flex flex-col gap-4"}>
            <ResultInfo
              removeParamFunc={updateFunctions.removeParam}
              changeSortFunc={updateFunctions.changeSort}
              searchParams={params}
              currentPage={pagination?.page ?? 1}
              perPage={pagination?.perPage ?? 20}
              itemCount={pagination?.total ?? 0}
              isLoading={isSkeletonLoading}
            />
          </aside>
          <div className={"flex min-w-0 flex-1 flex-col gap-8 py-4"}>
            <ResultList
              data={(data?.items ?? []).map((item) => parseResultCardProps(item))}
              isLoading={isSkeletonLoading}
            />
            {!isSkeletonLoading && (
              <Pagination
                searchParams={params}
                current={pagination?.page ?? 1}
                itemCount={pagination?.total ?? 0}
                perPage={pagination?.perPage ?? 20}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
