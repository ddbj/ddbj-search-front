import React, { FC } from "react";
import { ListRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const GEA: FC<Props> = ({ data }) => {
  if (data.type !== "gea") return <></>;
  return (
    <>
      <ListRow label="experimentType" values={data.experimentType} />
    </>
  );
};
