import type { FC } from "react";
import type { Xref } from "@/api/detail/base.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { isInternalDbLink, sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";

type Props = { sameAs: Xref[] | null };

export const SameAsRow: FC<Props> = ({ sameAs }) => {
  if (!sameAs || sameAs.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"Same As"}>
      <ul className={"flex gap-2"}>
        {sameAs.map((item, index) => (
          <li key={index}>
            <a
              href={sanitizeDbLink(item.url)}
              target={isInternalDbLink(item.url) ? undefined : "_blank"}
              rel={isInternalDbLink(item.url) ? undefined : "noreferrer"}
              className={"text-link-primary"}
            >
              {item.identifier}
            </a>
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};
