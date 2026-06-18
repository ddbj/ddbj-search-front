import type { FC } from "react";
import type { ExternalLink } from "@/api/detail/base.ts";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import { linkIconClasses } from "@/styles/classTokens.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";
import { ExternalLinkIcon } from "@/views/shared/icons/ExternalLinkIcon.tsx";

type Props = { externalLinks: ExternalLink[] };

export const ExternalLinksRow: FC<Props> = ({ externalLinks }) => {
  return (
    <InfoListItem term={detailFieldLabels.externalLinks}>
      <ul className={"flex flex-col"}>
        {externalLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url ?? undefined}
              target={"_blank"}
              rel={"noreferrer"}
              className={"text-link-primary"}
            >
              {link.label ? link.label : link.url}
              <ExternalLinkIcon className={linkIconClasses} />
            </a>
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};
