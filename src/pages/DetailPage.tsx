import { Link, Route, useLoaderData } from "@tanstack/react-router";
import React, { FC } from "react";
import { DetailTable } from "@/components/ui/DetailTable.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = {};

export const DetailPage: FC<Props> = ({}) => {
  const data = useLoaderData<never, never, never, ElasticSearchSource>({
    strict: false,
    select: (d) => d,
  });
  // console.log(data);
  return (
    <div className={"p-6"}>
      <Link to={"../../"} className={"mb-2 block w-fit"}>
        Back to home
      </Link>
      <DetailTable data={data} />
    </div>
  );
};
