import type { FC } from "react";
import type { Organism } from "@/api/detail/base.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";

type Props = { organism: Organism | null };

export const OrganismRow: FC<Props> = ({ organism }) => {
  if (!organism) {
    return null;
  } else {
    const label = organism.name || organism.identifier || "";
    return (
      <InfoListItem term={"Organism"}>
        <a
          href={makeNcbiTaxLink(organism.identifier)}
          className={"text-link-primary"}
          target={"_blank"}
        >
          {label}
        </a>
      </InfoListItem>
    );
  }
};

const makeNcbiTaxLink = (taxId: string) =>
  `https://www.ncbi.nlm.nih.gov/datasets/taxonomy/${taxId}/`;
