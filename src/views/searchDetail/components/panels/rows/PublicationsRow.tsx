import type { FC } from "react";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import { sanitizeHTML } from "@/lib/sanitizing/sanitizeHTML.ts";
import type { Publication } from "@/schema/api/detail/base.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";
import { ExternalLinkIcon } from "@/views/shared/icons/ExternalLinkIcon.tsx";
import { linkIconClasses } from "@/views/shared/styles/classTokens.ts";

type Props = { publications: Publication[] };

export const PublicationsRow: FC<Props> = ({ publications }) => {
  return (
    <InfoListItem term={detailFieldLabels.publications}>
      <ul className={"flex flex-col gap-y-2"}>
        {publications.map((p) => (
          <li className={"flex flex-col"} key={p.id}>
            <span className={"text-xs text-gray-500"}>{p.DbType}</span>
            {p.url ? (
              <a href={p.url} target={"_blank"} className={"text-link-primary"}>
                {composeTitle(p)}
                <ExternalLinkIcon className={linkIconClasses} />
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
