import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import type { FC } from "react";

type Props = {};

export const StatusPanel: FC<Props> = () => {
  return (
    <PanelWrapper>
      <InfoList>
        <InfoListItem term={"Status"} toolTipContent={"This is the description of Status"}>
          public
        </InfoListItem>
        <InfoListItem term={"Visibility"} toolTipContent={"This is the description of visibility"}>
          Unrestricted
        </InfoListItem>
        <InfoListItem term={"Created date"}>2024-04-27</InfoListItem>
        <InfoListItem term={"Modified date"}>2024-12-30</InfoListItem>
        <InfoListItem term={"Published date"}>2024-12-30</InfoListItem>
      </InfoList>
    </PanelWrapper>
  );
};
