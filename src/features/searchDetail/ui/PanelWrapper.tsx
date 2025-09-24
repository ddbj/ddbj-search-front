import clsx from "clsx";
import type { FC, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export const PanelWrapper: FC<Props> = ({ children, className }) => {
  const wrapperClassName = clsx(
    "flex flex-col rounded-md border border-gray-200 bg-white px-4 py-1",
    className
  );
  return <div className={wrapperClassName}>{children}</div>;
};
