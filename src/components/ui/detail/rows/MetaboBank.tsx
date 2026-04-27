import React, { FC } from "react";
import { ListRow } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const MetaboBank: FC<Props> = ({ data }) => {
  if (data.type !== "metabobank") return <></>;
  return (
    <>
      <ListRow label="studyType" values={data.studyType} />
      <ListRow label="experimentType" values={data.experimentType} />
      <ListRow label="submissionType" values={data.submissionType} />
    </>
  );
};
