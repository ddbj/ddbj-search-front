import type { FC } from "react";
import { Breadcrumbs, type BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import { ApiIcon } from "@/features/shared/graphics/ApiIcon.tsx";
import { InfoIcon } from "@/features/shared/graphics/InfoIcon.tsx";
import { IconTextLink } from "@/features/shared/IconTextLink.tsx";

type Props = {
  breadcrumbsPaths: BreadcrumbsPath[];
};

export const GlobalHeader: FC<Props> = ({ breadcrumbsPaths }) => {
  return (
    <div className={"flex justify-between"}>
      <Breadcrumbs paths={breadcrumbsPaths} />
      <nav className={"flex gap-x-4"}>
        <IconTextLink
          label={"About DDBJ Search"}
          to={"https://www.ddbj.nig.ac.jp/services/ddbj-search-e.html"}
          Icon={InfoIcon}
          target={"_blank"}
        />
        {/*<IconTextLink label={"Status"} to={"/status/"} Icon={StatusIcon} />*/}
        <IconTextLink label={"API"} to={"/api-doc/"} Icon={ApiIcon} target={"_blank"} />
      </nav>
    </div>
  );
};
