import type { FC } from "react";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";

export type AttributeKeyValue = {
  key: string;
  value: string;
};

type Props = {
  attributes: AttributeKeyValue[];
};

export const AttributesPanel: FC<Props> = ({ attributes }) => {
  return attributes.length === 0 ? (
    <></>
  ) : (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>Attributes</div>
      <InfoList>
        {attributes.map((attr, index) => {
          const itemKey = [attr.key, attr.value, index].join(":");
          return (
            <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"} key={itemKey}>
              <div>{attr.key}</div>
              <div>{attr.value}</div>
            </li>
          );
        })}
      </InfoList>
    </PanelWrapper>
  );
};
