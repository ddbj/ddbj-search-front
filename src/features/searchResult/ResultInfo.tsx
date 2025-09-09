import clsx from "clsx";
import type { FC } from "react";

type Props = {
  total: number;
};

const wrapperClasses = clsx("rounded-md border border-gray-200 p-2 text-sm");

export const ResultInfo: FC<Props> = ({ total }) => {
  return <div className={wrapperClasses}>Found {total} entries</div>;
};
