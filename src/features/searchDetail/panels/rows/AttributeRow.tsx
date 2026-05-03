import { Fragment, type FC } from "react";
import type { Attribute } from "@/api/detail/bioSample.ts";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";

type Props = { attributes: Attribute[] | null };

export const AttributeRow: FC<Props> = ({ attributes }) => {
  if (!attributes || attributes.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"Attributes"}>
      <dl className={"grid grid-cols-[auto_1fr] gap-x-3"}>
        {attributes.map((attr, index) => {
          const term: string =
            attr.display_name || attr.attribute_name || attr.harmonized_name || "";
          const key = [
            attr.attribute_name,
            attr.harmonized_name,
            attr.display_name,
            attr.content,
            index,
          ].join(":");
          return (
            <Fragment key={key}>
              <dt>{term}</dt>
              <dd>{attr.content}</dd>
            </Fragment>
          );
        })}
      </dl>
    </InfoListItem>
  );
};
