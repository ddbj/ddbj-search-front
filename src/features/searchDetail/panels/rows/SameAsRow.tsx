import type { FC } from "react";
import type { Xref } from "@/api/detail/base.ts";
import { DbLink } from "@/features/searchDetail/ui/DbLink.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { resolveDbLink } from "@/utils/sanitizeDbLink.ts";

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
            <DbLink link={resolveDbLink(item.url)} className={"text-link-primary"}>
              {item.identifier}
            </DbLink>
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};
