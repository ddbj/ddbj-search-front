import clsx from "clsx";
import type { FC } from "react";
import { MAX_ENTRIES } from "@/consts/counts.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryTipList } from "@/features/searchResult/result/QueryTipList.tsx";
import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { formatNumber } from "@/utils/formatNumber.ts";
import { getTotalPages } from "@/utils/getTotalPages.ts";

type Props = {
  removeParamFunc: UpdateSearchFunctions["removeParam"];
  changeSortFunc: UpdateSearchFunctions["changeSort"];
  searchParams: AnySearchParams;
  itemCount: number;
  perPage: number;
  currentPage: number;
  isLoading?: boolean;
};

const wrapperClasses = clsx(
  "flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm shadow-sm",
);

const headerClasses = clsx("flex flex-col gap-3 md:flex-row md:items-start md:justify-between");

const countPlaceholderClasses = clsx(
  "mx-1 inline-block h-4 animate-pulse rounded-sm bg-gray-100 align-middle",
);

const CountPlaceholder: FC<{ widthClassName: string }> = ({ widthClassName }) => {
  return (
    <span aria-label="Loading count" className={clsx(countPlaceholderClasses, widthClassName)} />
  );
};

export const ResultInfo: FC<Props> = ({
  searchParams,
  removeParamFunc,
  changeSortFunc,
  itemCount,
  perPage,
  currentPage,
  isLoading = false,
}) => {
  const totalPages = getTotalPages(itemCount, perPage);
  return (
    <div>
      <div className={"bg-white pt-4"}></div>
      <div className={wrapperClasses}>
        <div className={headerClasses}>
          <p className="text-sm leading-6 text-gray-700">
            Found{" "}
            {isLoading ? (
              <CountPlaceholder widthClassName={clsx("w-16")} />
            ) : (
              formatNumber(itemCount)
            )}{" "}
            entries / Displaying{" "}
            {isLoading ? <CountPlaceholder widthClassName={clsx("w-6")} /> : currentPage} of{" "}
            {isLoading ? (
              <CountPlaceholder widthClassName={clsx("w-10")} />
            ) : (
              formatNumber(totalPages)
            )}{" "}
            pages
            {!isLoading && itemCount > MAX_ENTRIES && (
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
