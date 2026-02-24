import clsx from "clsx";
import { MAX_ENTRIES } from "@/consts/counts.ts";
import { QueryTipList } from "@/features/searchResult/result/QueryTipList.tsx";
import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";
import { formatNumber } from "@/utils/formatNumber.ts";
import { getTotalPages } from "@/utils/getTotalPages.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { FC } from "react";

type Props = {
  removeParamFunc: UpdateSearchFunctions["removeParam"];
  changeSortFunc: UpdateSearchFunctions["changeSort"];
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
  changeSortFunc,
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
            Found {formatNumber(itemCount)} entries / Displaying {currentPage} of{" "}
            {formatNumber(totalPages)} pages
            {itemCount > MAX_ENTRIES && (
              <>
                <br />
                <span>
                  Due to database limitations, only the first {formatNumber(MAX_ENTRIES)} entries
                  can be listed.
                </span>
              </>
            )}
          </p>
          <SortDropdown changeSortFunc={changeSortFunc} currentSort={searchParams.sort} />
        </div>
        <QueryTipList removeParamFunc={removeParamFunc} searchParams={searchParams} />
      </div>
    </div>
  );
};
