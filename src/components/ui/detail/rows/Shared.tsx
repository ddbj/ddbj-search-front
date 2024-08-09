import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import React, { FC, Fragment, ReactElement } from "react";
import { TailwindElementProps } from "@/types/types.ts";

export const Row: FC<TailwindElementProps & { dd: string }> = ({ children, className, dd }) => {
  return (
    <div className={clsx("flex overflow-hidden px-2 py-3", className)}>
      <dt className="w-40 shrink-0 grow-0 text-sm font-bold text-gray-900">{dd}</dt>
      <dd className="shrink grow overflow-hidden text-sm text-gray-700">{children}</dd>
    </div>
  );
};

export const LinkText: FC<
  TailwindElementProps & { href: string; external?: boolean; blank?: boolean }
> = ({ href, children, external = false, blank = false, className }) => {
  const textClasses = clsx("text-primary hover:text-primary-dark", className);
  return external || blank ? (
    <a href={href} className={textClasses} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link to={href} className={textClasses} resetScroll={true}>
      {children}
    </Link>
  );
};

export const DefinitionList = (obj: Record<string, string | ReactElement>) => (
  <dl className={"grid grid-cols-min-1fr gap-x-4 gap-y-1 leading-normal"}>
    {Object.entries(obj).map(([key, value]) => {
      return (
        <Fragment key={key}>
          <dt className={"whitespace-nowrap font-medium"}>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
      );
    })}
  </dl>
);
