import React, { FC } from "react";
import { ElasticSearchSource } from "@/types.ts";

type Props = {
  data: ElasticSearchSource;
};

export const DetailTable: FC<Props> = ({ data }) => {
  return (
    <div>
      <div>DetailTable</div>
    </div>
  );
};
