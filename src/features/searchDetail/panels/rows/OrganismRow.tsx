import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import type { Organism } from "@/api/components.ts";
import type { FC } from "react";

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
  `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${taxId}`;
