import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import type { Grant } from "@/api/detail/bioProject.ts";
import type { SearchDetailResponse } from "@/api/types.ts";
import type { FC } from "react";

type Props = { grants: Grant[] | null };

export const GrantsRow: FC<Props> = ({ grants }) => {
  if (!grants || grants.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"Grants"}>
      <ul className={"flex flex-col gap-y-2"}>
        {grants.map((g) => (
          <li key={g.id} className={"flex flex-col"}>
            <div className={"text-xs text-gray-500"}>{g.title}</div>
            <div>
              {g.id}
              {g.agency.length > 0 && (
                <span>
                  {" / "}
                  {g.agency.map((a) => a.name || a.abbreviation).join(", ")}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};

export const getGrants = (res: SearchDetailResponse) => {
  if (res.type === "bioproject") {
    return res.grant;
  } else {
    return null;
  }
};
