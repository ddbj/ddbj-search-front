import clsx from "clsx";
import { QueryLists } from "@/features/searchResult/result/QueryLists.tsx";
import type { PaginationResponse } from "@/api/entries/base.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { FC } from "react";

type Props = {
  pagination: PaginationResponse;
  updateFunctions: UpdateSearchFunctions;
  params: AnySearchParams;
};

const wrapperClasses = clsx("rounded-md border border-gray-200 bg-white p-2 text-sm shadow-sm");

export const ResultInfo: FC<Props> = ({ pagination, params, updateFunctions }) => {
  return (
    <div>
      <div className={"bg-white pt-4"}></div>
      <div className={wrapperClasses}>
        Found {pagination.total} entries
        <QueryLists removeParam={updateFunctions.removeParam} params={params} />
      </div>
    </div>
  );
};
