import type { FC } from "react";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import type { Organization } from "@/schema/api/detail/base.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";
import { ExternalLinkIcon } from "@/views/shared/icons/ExternalLinkIcon.tsx";
import { linkIconClasses } from "@/views/shared/styles/classTokens.ts";

type Props = { organizations: Organization[] };

export const OrganizationsRow: FC<Props> = ({ organizations }) => {
  return (
    <InfoListItem term={detailFieldLabels.organizations}>
      <ul className={"flex flex-col gap-y-2"}>
        {organizations.map((org, index) => (
          <OrganizationItem org={org} key={index} />
        ))}
      </ul>
    </InfoListItem>
  );
};
const OrganizationItem: FC<{ org: Organization }> = ({ org }) => {
  return (
    <li>
      {org.url ? (
        <a href={org.url} target={"_blank"} className={"text-link-primary"}>
          {org.name}
          <ExternalLinkIcon className={linkIconClasses} />
        </a>
      ) : (
        <span>{org.name}</span>
      )}
      {org.abbreviation && <span> ({org.abbreviation})</span>}
    </li>
  );
};
