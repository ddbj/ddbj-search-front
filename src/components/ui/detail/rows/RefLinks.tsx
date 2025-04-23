import React, { FC } from "react";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { Xref, ElasticSearchSource } from "@/types/api.ts";

type Props = { refs: Xref[]; title: string };

export const RefLinks: FC<Props> = ({ refs, title }) => {
  if (!refs) return <Row dd={title} />;
  const obj = refs.reduce<Record<string, { identifier: string; url: string }[]>>((acc, ref) => {
    if (!acc[ref.type]) acc[ref.type] = [];
    acc[ref.type].push(ref);
    return acc;
  }, {});
  const inside = Object.entries(obj)
    .sort(([typeA], [typeB]) => typeA.localeCompare(typeB))
    .map(([type, refs]) => {
      return (
        <div className={"flex"} key={type}>
          <dt className={"w-36 shrink-0 grow-0 font-medium"}>
            {type} ({refs.length})
          </dt>
          <dd className={"grid grow grid-cols-auto-fill-100 gap-x-3"}>
            {refs.map((ref) => {
              const reg = new RegExp("(.*)(ddbj.nig.ac.jp/)(.*)(resource/)(.*)");
              const result = reg.exec(ref.url);
              const isExternal = !result;
              const rest = result ? (result[5] ?? "") : "";
              const linkText = isExternal ? ref.url : `/search/entry/${rest}`;
              return (
                <LinkText key={ref.identifier} href={linkText} external={isExternal}>
                  {ref.identifier}
                </LinkText>
              );
            })}
          </dd>
        </div>
      );
    });
  return (
    <Row dd={title}>
      <dl className={"flex flex-col gap-3"}>{inside}</dl>
    </Row>
  );
};
