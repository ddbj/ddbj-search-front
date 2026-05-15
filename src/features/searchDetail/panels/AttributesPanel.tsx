import type { FC } from "react";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";

export type Attribute = {
  attribute_name: string | null;
  display_name: string | null;
  harmonized_name: string | null;
  content: string;
};

type Props = {
  attributes: Attribute[];
};

export const AttributesPanel: FC<Props> = ({ attributes }) => {
  return attributes.length === 0 ? (
    <></>
  ) : (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>Attributes</div>
      <InfoList>
        {attributes.map((attr, index) => {
          const term = attr.display_name || attr.attribute_name || attr.harmonized_name || "";
          const key = [
            attr.attribute_name,
            attr.harmonized_name,
            attr.display_name,
            attr.content,
            index,
          ].join(":");
          return (
            <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"} key={key}>
              <div>{term}</div>
              <div>{attr.content}</div>
            </li>
          );
        })}
      </InfoList>
    </PanelWrapper>
  );
};
