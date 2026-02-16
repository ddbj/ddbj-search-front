import type { FC } from "react";

type Props = { dbName: string; items: { label: string; url: string; isExternal: boolean }[] };
export type XrefListItemProps = Props;

export const XrefListItem: FC<Props> = ({ dbName, items }) => {
  return (
    <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
      <div>
        {dbName} ({items.length})
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
