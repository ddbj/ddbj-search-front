import { Link, Route, useLoaderData } from "@tanstack/react-router";
import React, { FC, useEffect } from "react";
import { HomeIcon } from "@/components/icon/homeIcon.tsx";
import { DetailTable } from "@/components/ui/DetailTable.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = {};

export const DetailPage: FC<Props> = ({}) => {
  const data = useLoaderData<never, never, never, ElasticSearchSource>({
    strict: false,
    select: (d) => d,
  });
  useEffect(() => {
    const titleTag = document.querySelector("title")!;
    titleTag.textContent = `${data.identifier} | ${data.type} | DDBJ Search`;
  }, [data]);
  return (
    <main className={"p-6"}>
      <nav className={"flex gap-x-3 text-lg"}>
        <Link
          to={"/search"}
          className={
            "mb-2 block w-fit fill-primary text-primary hover:fill-primary-dark hover:text-primary-dark"
          }
        >
          <p className={"flex w-fit gap-x-1 align-baseline"}>
            <HomeIcon className={"w-5"} />
            <span className={"shrink-0"}>Home</span>
          </p>
        </Link>
        <span>&gt;</span>
        <span>{data.type}</span>
        <span>&gt;</span>
        <span>{data.identifier}</span>
      </nav>
      <DetailTable data={data} />
    </main>
  );
};
