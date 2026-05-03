import type { FC } from "react";
import type { ExternalLink } from "@/api/detail/base.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";

type Props = { externalLinks: ExternalLink[] | null | undefined };

export const ExternalLinksRow: FC<Props> = ({ externalLinks }) => {
  if (!externalLinks || externalLinks.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"External Links"}>
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
            </a>
          </li>
        ))}
      </ul>
    </InfoListItem>
  );
};
