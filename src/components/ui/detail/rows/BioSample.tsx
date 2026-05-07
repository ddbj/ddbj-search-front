import React, { FC } from "react";
import { DefinitionList, Row, ScalarRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

type BioSampleAttribute = {
  attribute_name?: string;
  display_name?: string;
  harmonized_name?: string;
  content?: string;
};

const extractAttributes = (properties: unknown): BioSampleAttribute[] => {
  const root = (
    properties as { BioSample?: { Attributes?: { Attribute?: unknown } } } | null | undefined
  )?.BioSample;
  const items = root?.Attributes?.Attribute;
  return Array.isArray(items) ? (items as BioSampleAttribute[]) : [];
};

export const BioSample: FC<Props> = ({ data }) => {
  if (data.type !== "biosample") return <></>;
  const attributes = extractAttributes(data.properties);
  const obj = attributes.reduce<Record<string, string>>((acc, attr) => {
    if (attr.attribute_name && attr.content != null) {
      acc[attr.attribute_name] = String(attr.content);
    }
    return acc;
  }, {});
  return (
    <>
      <ScalarRow label="host" value={data.host} />
      <ScalarRow label="strain" value={data.strain} />
      <ScalarRow label="isolate" value={data.isolate} />
      <ScalarRow label="geoLocName" value={data.geoLocName} />
      <ScalarRow label="collectionDate" value={data.collectionDate} />
      <Row dd={"attributes"}>
        <DefinitionList {...obj} />
      </Row>
    </>
  );
};
