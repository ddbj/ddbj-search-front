import clsx from "clsx";
import type { FC, ReactNode } from "react";

type Props = { className?: string; children?: ReactNode; useGrid?: boolean };

export const InfoList: FC<Props> = ({ children, className, useGrid = true }) => {
  const baseClass = clsx(
    useGrid ? "grid grid-cols-[auto_1fr] gap-x-4" : "flex flex-col",
    "gap-y-[1px] bg-gray-100 text-sm"
  );
  const wrapperClass = clsx(baseClass, className);
  return <ul className={wrapperClass}>{children}</ul>;
};
