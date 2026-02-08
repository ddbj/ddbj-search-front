import parse from "html-react-parser";
import React, { FC } from "react";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

export const CommonTitle: FC<{ data: ElasticSearchSource }> = ({ data }) => {
  if (!data.title) return null;
  return <Row dd={"title"}>{parse(data.title)}</Row>;
};

export const CommonDescription: FC<{ data: ElasticSearchSource }> = ({ data }) => {
  if (!data.description) return null;
  return <Row dd={"description"}>{parse(data.description)}</Row>;
};

export const Organism: FC<{ organism?: ElasticSearchSource["organism"] }> = ({ organism }) => {
  if (!organism) return <Row dd={"organism"} />;
  const label = organism.name || organism.identifier || "";
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
