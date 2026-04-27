import React, { FC } from "react";
import { ListRow, ScalarRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = {
  data: ElasticSearchSource;
};

export const SraExperiment: FC<Props> = ({ data }) => {
  if (data.type !== "sra-experiment") return <></>;
  return (
    <>
      <ListRow label="libraryStrategy" values={data.libraryStrategy} />
      <ListRow label="librarySource" values={data.librarySource} />
      <ListRow label="librarySelection" values={data.librarySelection} />
      <ScalarRow label="libraryLayout" value={data.libraryLayout} />
      <ScalarRow label="libraryName" value={data.libraryName} />
      <ScalarRow label="libraryConstructionProtocol" value={data.libraryConstructionProtocol} />
      <ScalarRow label="platform" value={data.platform} />
      <ListRow label="instrumentModel" values={data.instrumentModel} />
    </>
  );
};
