import clsx from "clsx";
import type { FC } from "react";

type Props = {
  total: number;
  took: number;
};

const wrapperClasses = clsx("rounded-md border border-gray-200 p-2 text-sm");

export const ResultInfo: FC<Props> = ({ total, took }) => {
  return (
    <div className={wrapperClasses}>
      Found more than {total} entries
      <br />
      Completed searching in {took} ms
    </div>
  );
};
