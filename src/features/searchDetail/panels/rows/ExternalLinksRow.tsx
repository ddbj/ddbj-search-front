import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import type { ExternalLink } from "@/api/detail/base.ts";
import type { SearchDetailResponse } from "@/utils/searchDetailResponse.ts";
import type { FC } from "react";

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

export const getExternalLinks = (res: SearchDetailResponse) => {
  return res.externalLink;
};
