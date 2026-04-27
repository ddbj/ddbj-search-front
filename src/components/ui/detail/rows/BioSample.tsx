import React, { FC } from "react";
import { ScalarRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const BioSample: FC<Props> = ({ data }) => {
  if (data.type !== "biosample") return <></>;
  return (
    <>
      <ScalarRow label="host" value={data.host} />
      <ScalarRow label="strain" value={data.strain} />
      <ScalarRow label="isolate" value={data.isolate} />
      <ScalarRow label="geoLocName" value={data.geoLocName} />
      <ScalarRow label="collectionDate" value={data.collectionDate} />
    </>
  );
};
