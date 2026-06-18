import type { FC } from "react";
import type { Organism } from "@/api/detail/base.ts";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import { linkIconClasses } from "@/styles/classTokens.ts";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";
import { ExternalLinkIcon } from "@/views/shared/icons/ExternalLinkIcon.tsx";

type Props = { organism: Organism };

export const OrganismRow: FC<Props> = ({ organism }) => {
  const label = organism.name || organism.identifier || "";

  return (
    <InfoListItem term={detailFieldLabels.organism}>
      <a
        href={makeNcbiTaxLink(organism.identifier)}
        className={"text-link-primary"}
        target={"_blank"}
      >
        {label}
        <ExternalLinkIcon className={linkIconClasses} />
      </a>
    </InfoListItem>
  );
};

const makeNcbiTaxLink = (taxId: string) =>
  `https://www.ncbi.nlm.nih.gov/datasets/taxonomy/${taxId}/`;
