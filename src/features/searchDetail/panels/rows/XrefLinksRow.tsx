import type { FC } from "react";
import type { Xref } from "@/api/detail/base.ts";
import { DbLink } from "@/features/searchDetail/ui/DbLink.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { resolveDbLink } from "@/utils/sanitizeDbLink.ts";

type Props = {
  term: string;
  xrefs: Xref[] | null | undefined;
};

export const XrefLinksRow: FC<Props> = ({ term, xrefs }) => {
  if (!xrefs || xrefs.length === 0) {
    return <></>;
  }

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
