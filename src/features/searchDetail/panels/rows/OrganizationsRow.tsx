import type { FC } from "react";
import type { Organization } from "@/api/detail/base.ts";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";

type Props = { organizations: Organization[] };

export const OrganizationsRow: FC<Props> = ({ organizations }) => {
  return (
    <InfoListItem term={detailFieldLabels.organizations}>
      <ul className={"flex flex-col gap-y-2"}>
        {organizations.sort(sortOrganizations).map((org, index) => (
          <li key={index} className={"flex flex-col"}>
            <div className={"text-xs text-gray-500"}>
              {org.role}
              {org.organizationType && (
                <span>
                  {" / "}
                  {org.organizationType}
                </span>
              )}
            </div>
            <div>
              {org.url ? (
                <a href={org.url} target={"_blank"} className={"text-link-primary"}>
                  {org.name}
                </a>
              ) : (
                <span>{org.name}</span>
              )}
              {org.abbreviation && <span> ({org.abbreviation})</span>}
            </div>
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};
const sortOrganizations = (a: Organization, b: Organization) => {
  return (a.role ?? "").localeCompare(b.role ?? "");
};
