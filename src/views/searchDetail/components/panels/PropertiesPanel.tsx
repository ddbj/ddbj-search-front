import type { FC } from "react";
import { PropertiesRow } from "@/views/searchDetail/components/panels/rows/PropertiesRow.tsx";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";
import { PanelWrapper } from "@/views/searchDetail/components/ui/PanelWrapper.tsx";

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
