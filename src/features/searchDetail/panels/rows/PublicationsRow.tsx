import type { FC } from "react";
import type { Publication } from "@/api/detail/bioProject.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { sanitizeHTML } from "@/utils/sanitizeHTML.ts";

type Props = { publications: Publication[] | null };

export const PublicationsRow: FC<Props> = ({ publications }) => {
  if (!publications || publications.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"Publications"}>
      <ul className={"flex flex-col gap-y-2"}>
        {publications.map((p) => (
          <li className={"flex flex-col"} key={p.id}>
            <span className={"text-xs text-gray-500"}>{p.DbType}</span>
            {p.url ? (
              <a href={p.url} target={"_blank"} className={"text-link-primary"}>
                {composeTitle(p)}
              </a>
            ) : (
              <span>{composeTitle(p)}</span>
            )}
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};

const composeTitle = (p: Publication) => {
  switch (true) {
    case !!p.title:
      return sanitizeHTML(p.title);
    case !!p.url:
      return p.url;
    default:
      return "no title";
  }
};
