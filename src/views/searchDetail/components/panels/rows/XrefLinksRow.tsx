import type { FC } from "react";
import { resolveDbLink } from "@/lib/sanitizing/sanitizeDbLink.ts";
import type { Xref } from "@/schema/api/detail/base.ts";
import { DbLink } from "@/views/searchDetail/components/ui/DbLink.tsx";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";

type Props = {
  term: string;
  xrefs: Xref[];
};

export const XrefLinksRow: FC<Props> = ({ term, xrefs }) => {
  return (
    <InfoListItem term={term}>
      <ul className={"flex flex-wrap gap-2"}>
        {xrefs.map((item, index) => (
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
