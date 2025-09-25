import type { FC } from "react";

type Props = { term: string; values: [string, string][] };

export const XrefListItem: FC<Props> = ({ term, values }) => {
  return (
    <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
      <div>
        {term} ({values.length})
      </div>
      <div className={"grid grid-cols-[repeat(auto-fill,_160px)] gap-y-1"}>
        {values.map(([value, link]) => (
          <a href={link} className={"text-link-primary"} key={value}>
            {value}
          </a>
        ))}
      </div>
    </li>
  );
};
