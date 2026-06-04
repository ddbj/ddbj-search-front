import type { FC } from "react";
import type { ExternalLink } from "@/api/detail/base.ts";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { ExternalLinkIcon } from "@/features/shared/graphics/ExternalLinkIcon.tsx";
import { linkIconClasses } from "@/styles/classTokens.ts";

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
