import { parseRefs, parseXrefItem } from "@/features/searchDetail/panels/XrefPanel.tsx";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem } from "@/features/searchDetail/ui/XrefListItem.tsx";
import type { Xref } from "@/api/detail/base.ts";
import type { SearchDetailResponse } from "@/api/types.ts";
import type { FC } from "react";

type Props = {
  childProjects: Xref[];
  parentProjects: Xref[];
};

type UmbrellaProjectsSource =
  | {
      type: "bioproject";
      childBioProjects: Xref[];
      parentBioProjects: Xref[];
    }
  | {
      type: Exclude<SearchDetailResponse["type"], "bioproject">;
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
export const getUmbrellaProjectsProps = (res: UmbrellaProjectsSource): Props | null => {
  if (res.type === "bioproject") {
    return {
      childProjects: res.childBioProjects,
      parentProjects: res.parentBioProjects,
    };
  } else {
    return null;
  }
};
