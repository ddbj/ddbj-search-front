import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import type { Organization } from "@/api/detail/bioProject.ts";
import type { SearchDetailResponse } from "@/utils/searchDetailResponse.ts";
import type { FC } from "react";

type Props = { organizations: Organization[] | null };

export const OrganizationsRow: FC<Props> = ({ organizations }) => {
  if (!organizations || organizations.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"Organizations"}>
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

export const getOrganizations = (res: SearchDetailResponse) => {
  if (res.type === "bioproject") {
    return res.organization;
  } else {
    return null;
  }
};
