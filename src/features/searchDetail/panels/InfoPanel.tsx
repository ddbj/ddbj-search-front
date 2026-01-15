import { OrganismRow } from "@/features/searchDetail/panels/rows/OrganismRow.tsx";
import { SanitizedRow } from "@/features/searchDetail/panels/rows/SanitizedRow.tsx";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import type { SearchDetailResponse } from "@/utils/searchDetailResponse.ts";
import type { FC } from "react";

type Props = { data: SearchDetailResponse };

export const InfoPanel: FC<Props> = ({ data }) => {
  return (
    <PanelWrapper>
      <InfoList>
        <SanitizedRow term={"Title"} value={data.title} />
        <SanitizedRow term={"Description"} value={data.description} />
        <OrganismRow organism={data.organism} />
      </InfoList>
    </PanelWrapper>
  );
};
