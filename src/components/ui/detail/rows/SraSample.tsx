import React, { FC } from "react";
import { DefinitionList, Row, ScalarRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

type SraSampleAttribute = {
  TAG?: string;
  VALUE?: string;
};

const extractAttributes = (properties: unknown): SraSampleAttribute[] => {
  const items = (
    properties as
      | { SAMPLE_SET?: { SAMPLE?: { SAMPLE_ATTRIBUTES?: { SAMPLE_ATTRIBUTE?: unknown } } } }
      | null
      | undefined
  )?.SAMPLE_SET?.SAMPLE?.SAMPLE_ATTRIBUTES?.SAMPLE_ATTRIBUTE;
  return Array.isArray(items) ? (items as SraSampleAttribute[]) : [];
};

export const SraSample: FC<Props> = ({ data }) => {
  if (data.type !== "sra-sample") return <></>;
  const attributes = extractAttributes(data.properties);
  const obj = attributes.reduce<Record<string, string>>((acc, attr) => {
    if (attr.TAG && attr.VALUE != null) {
      acc[attr.TAG] = String(attr.VALUE);
    }
    return acc;
  }, {});
  return (
    <>
      <ScalarRow label="geoLocName" value={data.geoLocName} />
      <ScalarRow label="collectionDate" value={data.collectionDate} />
      <Row dd={"attributes"}>
        <DefinitionList {...obj} />
      </Row>
    </>
  );
};
