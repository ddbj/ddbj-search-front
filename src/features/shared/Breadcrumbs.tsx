import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { HomeIcon } from "@/features/graphics/HomeIcon.tsx";
import { IconTextLink } from "@/features/shared/IconTextLink.tsx";
import type { FC } from "react";

type Props = {
  paths: {
    label: string;
    to?: string;
  }[];
};

export type BreadcrumbsPath = Props["paths"][0];

const wrapperClasses = clsx("flex gap-x-3 text-base");
const linkClasses = clsx(
  "block w-fit fill-link-primary text-link-primary hover:fill-link-primary-hover hover:text-link-primary-hover"
);

export const Breadcrumbs: FC<Props> = ({ paths }) => {
  return (
    <nav className={wrapperClasses}>
      <IconTextLink label={"DDBJ Search Home"} to={"/"} Icon={HomeIcon} />
      {paths.map(({ label, to }, index) => {
        return (
          <span key={`${label}-${index}`} className={"flex w-fit gap-x-3"}>
            <span>&gt;</span>
            {to && (
              <Link to={to} className={linkClasses} from={"/"}>
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
