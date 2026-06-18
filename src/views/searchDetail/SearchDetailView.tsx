import type { FC } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { getEntryTitle } from "@/lib/entry/getEntryTitle.ts";
import { useTitle } from "@/lib/react/useTitle.ts";
import type { SearchDetailResponse } from "@/schema/api/types.ts";
import {
  type AttributeKeyValue,
  AttributesPanel,
} from "@/views/searchDetail/components/panels/AttributesPanel.tsx";
import {
  parseBioSampleAttributes,
  parseSraSampleAttributes,
} from "@/views/searchDetail/components/panels/attributesPanelUtils.ts";
import { DownloadPanel } from "@/views/searchDetail/components/panels/DownloadPanel.tsx";
import { InfoPanel } from "@/views/searchDetail/components/panels/InfoPanel.tsx";
import { PropertiesPanel } from "@/views/searchDetail/components/panels/PropertiesPanel.tsx";
import { StatusPanel } from "@/views/searchDetail/components/panels/StatusPanel.tsx";
import { UmbrellaProjectsPanel } from "@/views/searchDetail/components/panels/UmbrellaProjectsPanel.tsx";
import { getUmbrellaProjectsProps } from "@/views/searchDetail/components/panels/umbrellaProjectsPanelUtils.ts";
import { XrefPanel } from "@/views/searchDetail/components/panels/XrefPanel.tsx";
import { parseRefs } from "@/views/searchDetail/components/panels/xrefPanelUtils.ts";
import { GlobalHeader } from "@/views/shared/components/GlobalHeader.tsx";

type Props = {
  data: SearchDetailResponse;
};

export const SearchDetailView: FC<Props> = ({ data }) => {
  useTitle(getEntryTitle(data));
  const dbType = data.type as DBType;
  const identifier = data.identifier;
  const breadcrumbsPaths = [
    { label: "Entries", to: "/entry/" },
    { label: dbLabels[dbType], to: `/entry/${dbType}/` },
    { label: identifier },
  ];
  const umbrellaProps = getUmbrellaProjectsProps(data);
  const attributes = getAttributes(data);
  const showsAttributesPanel = data.type === "biosample" || data.type === "sra-sample";
  return (
    <main className={"flex flex-col gap-4 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"flex items-start gap-8"}>
        <div data-name={"leftCol"} className={"flex min-w-0 flex-1 flex-col gap-4"}>
          <InfoPanel data={data} />
          {showsAttributesPanel && <AttributesPanel attributes={attributes} />}
          {umbrellaProps && <UmbrellaProjectsPanel {...umbrellaProps} />}
          <PropertiesPanel data={data.properties} />
          <XrefPanel
            xrefs={parseRefs(data.dbXrefs, data.dbXrefsCount)}
            dbType={data.type}
            identifier={data.identifier}
          />
        </div>

        <div data-name={"rightCol"} className={"flex w-fit flex-shrink-0 flex-col gap-4"}>
          <StatusPanel data={data} />
          <DownloadPanel data={data} />
        </div>
      </div>
    </main>
  );
};

const getAttributes = (data: SearchDetailResponse): AttributeKeyValue[] => {
  switch (data.type) {
    case "biosample":
      return parseBioSampleAttributes(data.properties);
    case "sra-sample":
      return parseSraSampleAttributes(data.properties);
    default:
      return [];
  }
};
