import clsx from "clsx";
import { QueryLists } from "@/features/searchResult/result/QueryLists.tsx";
import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";
import { getTotalPages } from "@/utils/getTotalPages.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { FC } from "react";

type Props = {
  removeParamFunc: UpdateSearchFunctions["removeParam"];
  searchParams: AnySearchParams;
  itemCount: number;
  perPage: number;
  currentPage: number;
};

const wrapperClasses = clsx(
  "flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm shadow-sm"
);

export const ResultInfo: FC<Props> = ({
  searchParams,
  removeParamFunc,
  itemCount,
  perPage,
  currentPage,
}) => {
  const totalPages = getTotalPages(itemCount, perPage);
  return (
    <div>
      <div className={"bg-white pt-4"}></div>
      <div className={wrapperClasses}>
        <div className={"flex items-center justify-between"}>
          <p>
            Found {itemCount} entries / Displaying {currentPage} of {totalPages} pages
          </p>
          <SortDropdown />
        </div>
        <QueryLists removeParamFunc={removeParamFunc} searchParams={searchParams} />
      </div>
    </div>
  );
};
