import parse from "html-react-parser";
import React, { FC } from "react";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

export const CommonTitle: FC<{ str?: string; type: ElasticSearchSource["type"] }> = ({
  str,
  type,
}) => {
  switch (type) {
    case "bioproject":
    case "biosample":
    case "sra-experiment":
      return <Row dd={"title"}>{parse(str ?? "")}</Row>;
    default:
      return null;
  }
};

export const CommonDescription: FC<{ str?: string | null; type: ElasticSearchSource["type"] }> = ({
  str,
  type,
}) => {
  switch (type) {
    case "bioproject":
    case "biosample":
      return <Row dd={"description"}>{parse(str ?? "")}</Row>;
    default:
      return null;
  }
};

export const Organism: FC<{ organism?: ElasticSearchSource["organism"] }> = ({ organism }) => {
  if (!organism) return <Row dd={"organism"} />;
  const label = organism.name ?? organism.identifier;
  return (
    <Row dd={"organism"}>
      <LinkText
        href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${organism.identifier}`}
        external={true}
      >
        {label}
      </LinkText>
    </Row>
  );
};
