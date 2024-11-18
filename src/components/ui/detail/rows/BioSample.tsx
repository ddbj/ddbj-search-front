import React, { FC } from "react";
import { DefinitionList, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const BioSample: FC<Props> = ({ data }) => {
  if (data.type !== "biosample") return <></>;
  return (
    <>
      <Attributes data={data} />
    </>
  );
};

const Attributes: FC<Props> = ({ data }) => {
  if (data.type !== "biosample") return <></>;
  const attributes = data.attributes ?? [];
  const obj = attributes.reduce<Record<string, string>>((acc, attr) => {
    acc[attr.attribute_name] = attr.content;
    return acc;
  }, {});
  return (
    <Row dd={"attributes"}>
      <DefinitionList {...obj} />
    </Row>
  );
};
