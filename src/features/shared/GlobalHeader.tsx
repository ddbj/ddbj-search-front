import { Link } from "@tanstack/react-router";
import { ApiIcon } from "@/features/graphics/ApiIcon.tsx";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";
import { Breadcrumbs, type BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import { IconTextLink } from "@/features/shared/IconTextLink.tsx";
import type { FC } from "react";

type Props = {
  breadcrumbsPaths: BreadcrumbsPath[];
};

export const GlobalHeader: FC<Props> = ({ breadcrumbsPaths }) => {
  return (
    <div className={"flex justify-between"}>
      <Breadcrumbs paths={breadcrumbsPaths} />
      <nav className={"flex gap-x-4"}>
        <IconTextLink label={"About DDBJ Search"} to={"/about"} Icon={CircleQuestionIcon} />
        <IconTextLink label={"API"} to={"/api-doc"} Icon={ApiIcon} />
      </nav>
    </div>
  );
};
