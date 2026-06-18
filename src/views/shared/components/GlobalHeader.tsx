import type { FC } from "react";
import { Breadcrumbs, type BreadcrumbsPath } from "@/views/shared/components/Breadcrumbs.tsx";
import { IconTextLink } from "@/views/shared/components/IconTextLink.tsx";
import { ApiIcon } from "@/views/shared/icons/ApiIcon.tsx";
import { InfoIcon } from "@/views/shared/icons/InfoIcon.tsx";

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
