import clsx from "clsx";
import type { FC } from "react";

type Props = {};

const wrapperClasses = clsx("h-24 rounded-md bg-gray-100 p-2");
export const ResultCard: FC<Props> = () => {
  return <div className={wrapperClasses}>ResultCard</div>;
};
