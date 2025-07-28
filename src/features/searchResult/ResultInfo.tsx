import clsx from "clsx";
import type { FC } from "react";

type Props = {};

const wrapperClasses = clsx("rounded-md border border-gray-200 p-2 text-sm");

export const ResultInfo: FC<Props> = () => {
  return (
    <div className={wrapperClasses}>
      Found more than 10000 entries
      <br />
      Completed searching in 8 ms
    </div>
  );
};
