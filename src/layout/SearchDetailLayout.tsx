import type { FC } from "react";
import type { SearchDetailResponse } from "@/api/types.ts";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { DownloadPanel } from "@/features/searchDetail/panels/DownloadPanel.tsx";
import { InfoPanel } from "@/features/searchDetail/panels/InfoPanel.tsx";
import { PropertiesPanel } from "@/features/searchDetail/panels/PropertiesPanel.tsx";
import { StatusPanel } from "@/features/searchDetail/panels/StatusPanel.tsx";
import { UmbrellaProjectsPanel } from "@/features/searchDetail/panels/UmbrellaProjectsPanel.tsx";
import { getUmbrellaProjectsProps } from "@/features/searchDetail/panels/umbrellaProjectsPanelUtils.ts";
import { XrefPanel } from "@/features/searchDetail/panels/XrefPanel.tsx";
import { parseRefs } from "@/features/searchDetail/panels/xrefPanelUtils.ts";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import { getEntryTitle } from "@/utils/getEntryTitle.ts";
import { useTitle } from "@/utils/useTitle.ts";

type Props = {
  data: SearchDetailResponse;
};

export const SearchDetailLayout: FC<Props> = ({ data }) => {
  useTitle(getEntryTitle(data));
  const dbType = data.type as DBType;
  const identifier = data.identifier;
  const breadcrumbsPaths = [
    { label: "Entries", to: "/entry/" },
    { label: dbLabels[dbType], to: `/entry/${dbType}/` },
    { label: identifier },
  ];
  const umbrellaProps = getUmbrellaProjectsProps(data);
  return (
    <main className={"flex flex-col gap-4 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"flex items-start gap-8"}>
        <div data-name={"leftCol"} className={"flex min-w-0 flex-1 flex-col gap-4"}>
          <InfoPanel data={data} />
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
