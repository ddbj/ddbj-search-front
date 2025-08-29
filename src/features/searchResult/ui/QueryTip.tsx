import clsx from "clsx";
import { type FC } from "react";
import type { AnySearchParamsKey } from "@/schema/search.ts";

type Props = {
  label: { name: string; value: string };
  data: { name: AnySearchParamsKey; value: string };
  onClickRemove: (name: AnySearchParamsKey, value: string) => void;
};

const wrapperClasses = clsx(
  "flex w-fit gap-1 rounded-full bg-fire-bush-700 px-2 py-1 text-xs text-white"
);
const buttonClasses = clsx("cursor-pointer");

export const QueryTip: FC<Props> = ({ label, data, onClickRemove }) => {
  return (
    <div className={wrapperClasses}>
      <span>
        {label.name}: {label.value}
      </span>
      <span className={buttonClasses} onClick={() => onClickRemove(data.name, data.value)}>
        [X]
      </span>
    </div>
  );
};
