import React, { FC } from "react";
import { DefinitionList, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const SraSample: FC<Props> = ({ data }) => {
  if (data.type !== "sra-sample") return <></>;
  return <Attributes data={data} />;
};

const Attributes: FC<Props> = ({ data }) => {
  if (data.type !== "sra-sample") return <></>;
  const attributes = data.properties.SAMPLE_ATTRIBUTES?.SAMPLE_ATTRIBUTE ?? [];
  const obj = attributes.reduce<Record<string, string>>((acc, attr) => {
    acc[attr.TAG] = attr.VALUE;
    return acc;
  }, {});
  return (
    <Row dd={"attributes"}>
      <DefinitionList {...obj} />
    </Row>
  );
};
