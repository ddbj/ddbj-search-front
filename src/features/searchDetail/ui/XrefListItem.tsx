import type { FC } from "react";

type Props = {
  dbName: string;
  actualCount: number;
  items: { label: string; url: string; isExternal: boolean }[];
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
        {items.map(({ label, url, isExternal }) => (
          <a
            href={url}
            target={isExternal ? "_blank" : undefined}
            className={"text-link-primary"}
            key={label}
          >
            {label}
          </a>
        ))}
      </div>
    </li>
  );
};
