import type { FC } from "react";
import { PropertiesRow } from "@/features/searchDetail/panels/rows/PropertiesRow.tsx";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";

type Props = {
  data: unknown;
};

export const PropertiesPanel: FC<Props> = ({ data }) => {
  return (
    <PanelWrapper>
      <InfoList>
        <PropertiesRow data={data} />
      </InfoList>
    </PanelWrapper>
  );
};
