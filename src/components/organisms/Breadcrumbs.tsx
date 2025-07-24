import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { HomeIcon } from "@/components/graphics/HomeIcon.tsx";
import type { FC } from "react";

type Props = {
  paths: {
    label: string;
    to?: string;
  }[];
};

const wrapperClasses = clsx("flex gap-x-3 text-base");
const linkClasses = clsx(
  "mb-2 block w-fit fill-link-primary text-link-primary hover:fill-link-primary-hover hover:text-link-primary-hover"
);

export const Breadcrumbs: FC<Props> = ({ paths }) => {
  return (
    <nav className={wrapperClasses}>
      <Link to={"/"} className={linkClasses}>
        <p className={"flex w-fit gap-x-1"}>
          <HomeIcon className={"w-5"} />
          <span className={"shrink-0"}>Home</span>
        </p>
      </Link>
      {paths.map(({ label, to }, index) => {
        return (
          <span key={`${label}-${index}`} className={"flex w-fit gap-x-3"}>
            <span>&gt;</span>
            {to && (
              <Link to={to} className={linkClasses}>
                {label}
              </Link>
            )}
            {!to && <span>{label}</span>}
          </span>
        );
      })}
    </nav>
  );
};
