import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import type { FC } from "react";

type Props = {};

export const InfoPanel: FC<Props> = () => {
  return (
    <PanelWrapper>
      <InfoList>
        <InfoListItem term={"Title"}>DNA03206</InfoListItem>
        <InfoListItem term={"Description"}>
          DNA extracted from pelleted TK6 cells using the Qiagen DNeasy Blood and Tissue kit
        </InfoListItem>
        <InfoListItem term={"Organism"}>
          <a href="#" className={"text-link-primary"}>
            Homo sapiens
          </a>
        </InfoListItem>
      </InfoList>
    </PanelWrapper>
  );
};
