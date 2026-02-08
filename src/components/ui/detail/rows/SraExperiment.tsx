import React, { FC } from "react";
import { PrettyJSON } from "@/components/ui/detail/rows/Properties.tsx";
import { DefinitionList, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";
import { SraExperimentProperties } from "@/types/sraExperiment.ts";

type Props = {
  data: ElasticSearchSource;
};

export const SraExperiment: FC<Props> = ({ data }) => {
  if (data.type !== "sra-experiment") return <></>;
  return (
    <>
      <Descriptor data={data} />
      <Platform data={data} />
    </>
  );
};

const Descriptor: FC<Props> = ({ data }) => {
  if (data.type !== "sra-experiment") return <></>;
  const properties = data.properties as SraExperimentProperties;
  const libraryDescriptor =
    properties.EXPERIMENT_SET?.EXPERIMENT?.DESIGN?.LIBRARY_DESCRIPTOR;
  if (!libraryDescriptor) return <Row dd={"library descriptor"} />;
  const descriptor = JSON.stringify(libraryDescriptor, null, 2);
  return <Row dd={"library descriptor"}>{<PrettyJSON code={descriptor} />}</Row>;
};

const Platform: FC<Props> = ({ data }) => {
  if (data.type !== "sra-experiment") return <></>;
  const properties = data.properties as SraExperimentProperties;
  const platform = properties.EXPERIMENT_SET?.EXPERIMENT?.PLATFORM ?? {};
  const obj = Object.entries(platform).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[key] = value?.INSTRUMENT_MODEL || "";
    return acc;
  }, {});
  return (
    <Row dd={"platform"}>
      <DefinitionList {...obj} />
    </Row>
  );
};
