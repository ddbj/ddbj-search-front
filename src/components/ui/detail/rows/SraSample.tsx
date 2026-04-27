import React, { FC } from "react";
import { ScalarRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const SraSample: FC<Props> = ({ data }) => {
  if (data.type !== "sra-sample") return <></>;
  return (
    <>
      <ScalarRow label="geoLocName" value={data.geoLocName} />
      <ScalarRow label="collectionDate" value={data.collectionDate} />
    </>
  );
};
