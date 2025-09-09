import clsx from "clsx";
import type { PaginationResponse } from "@/api/entries/base.ts";
import type { FC } from "react";

type Props = {
  pagination: PaginationResponse;
};

const wrapperClasses = clsx("rounded-md border border-gray-200 p-2 text-sm");

export const ResultInfo: FC<Props> = ({ pagination }) => {
  return <div className={wrapperClasses}>Found {pagination.total} entries</div>;
};
