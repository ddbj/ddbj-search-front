import type { FC } from "react";
import { DbLink } from "@/features/searchDetail/ui/DbLink.tsx";
import type { ResolvedDbLink } from "@/utils/sanitizeDbLink.ts";

type Props = {
  dbName: string;
  actualCount: number;
  items: { label: string; link: ResolvedDbLink }[];
  isTruncated: boolean;
};
export type XrefListItemProps = Omit<Props, "isTruncated">;

export const XrefListItem: FC<Props> = ({ dbName, items, actualCount, isTruncated }) => {
  const countString = isTruncated ? `${items.length}/${actualCount}` : `${items.length}`;
  return (
    <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
      <div>
        {dbName} ({countString})
      </div>
      <div className={"grid grid-cols-[repeat(auto-fill,_160px)] gap-y-1"}>
        {items.map(({ label, link }, index) => (
          <DbLink link={link} className={"text-link-primary"} key={`${label}-${index}`}>
            {label}
          </DbLink>
        ))}
      </div>
    </li>
  );
};
