import type { FC } from "react";
import type { Xref } from "@/schema/api/detail/base.ts";
import { parseXrefItem } from "@/views/searchDetail/components/panels/xrefPanelUtils.ts";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";
import { PanelWrapper } from "@/views/searchDetail/components/ui/PanelWrapper.tsx";
import { XrefListItem } from "@/views/searchDetail/components/ui/XrefListItem.tsx";

type Props = {
  childProjects: Xref[];
  parentProjects: Xref[];
};

export const UmbrellaProjectsPanel: FC<Props> = ({ childProjects, parentProjects }) => {
  return childProjects.length === 0 && parentProjects.length === 0 ? (
    <></>
  ) : (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>Umbrella Projects</div>
      <InfoList>
        {parentProjects.length > 0 && (
          <XrefListItem
            dbName={"Parent BioProjects"}
            actualCount={parentProjects.length}
            items={parentProjects.map(parseXrefItem)}
            isTruncated={false}
          />
        )}
        {childProjects.length > 0 && (
          <XrefListItem
            dbName={"Child BioProjects"}
            actualCount={childProjects.length}
            items={childProjects.map(parseXrefItem)}
            isTruncated={false}
          />
        )}
      </InfoList>
    </PanelWrapper>
  );
};
