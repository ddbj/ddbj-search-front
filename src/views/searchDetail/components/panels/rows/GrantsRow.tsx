import type { FC } from "react";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import type { Grant } from "@/schema/api/detail/base.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";

type Props = { grants: Grant[] };

export const GrantsRow: FC<Props> = ({ grants }) => {
  return (
    <InfoListItem term={detailFieldLabels.grants}>
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
