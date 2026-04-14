import clsx from "clsx";
import type { FC, ReactNode } from "react";

type Props = { className?: string; children?: ReactNode; useGrid?: boolean; gapX?: number };

export const InfoList: FC<Props> = ({ children, className, useGrid = true }) => {
  const baseClass = clsx(
    useGrid ? `grid min-w-0 grid-cols-[auto_1fr] gap-x-4` : "flex min-w-0 flex-col",
    "gap-y-[1px] bg-gray-100 text-sm",
  );
  const wrapperClass = clsx(baseClass, className);
  return <ul className={wrapperClass}>{children}</ul>;
};
