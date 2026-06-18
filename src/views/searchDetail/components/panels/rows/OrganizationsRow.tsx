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
        {organizations.sort(sortOrganizations).map((org, index) => (
          <OrganizationItem org={org} key={index} />
        ))}
      </ul>
    </InfoListItem>
  );
};
const OrganizationItem: FC<{ org: Organization }> = ({ org }) => {
  const roleStr = org.role ? `Role: ${org.role}` : "";
  const typeStr = org.organizationType ? `Type: ${org.organizationType}` : "";
  const firstRow = [roleStr, typeStr].filter((str) => str !== "").join(" / ");

  return (
    <li className={"flex flex-col"}>
      <div className={"text-xs text-gray-500"}>{firstRow}</div>
      <div>
        {org.url ? (
          <a href={org.url} target={"_blank"} className={"text-link-primary"}>
            {org.name}
            <ExternalLinkIcon className={linkIconClasses} />
          </a>
        ) : (
          <span>{org.name}</span>
        )}
        {org.abbreviation && <span> ({org.abbreviation})</span>}
      </div>
    </li>
  );
};
const sortOrganizations = (a: Organization, b: Organization) => {
  return (a.role ?? "").localeCompare(b.role ?? "");
};
