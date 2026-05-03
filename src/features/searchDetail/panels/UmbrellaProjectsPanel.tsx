import type { FC } from "react";
import type { Xref } from "@/api/detail/base.ts";
import { parseXrefItem } from "@/features/searchDetail/panels/xrefPanelUtils.ts";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem } from "@/features/searchDetail/ui/XrefListItem.tsx";

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
            dbName={"Parent Bioprojects"}
            actualCount={parentProjects.length}
            items={parentProjects.map(parseXrefItem)}
            isTruncated={false}
          />
        )}
        {childProjects.length > 0 && (
          <XrefListItem
            dbName={"Child Bioprojects"}
            actualCount={childProjects.length}
            items={childProjects.map(parseXrefItem)}
            isTruncated={false}
          />
        )}
      </InfoList>
    </PanelWrapper>
  );
};
