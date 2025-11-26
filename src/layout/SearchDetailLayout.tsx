import { dbLabels, type DBType } from "@/consts/db.ts";
import { DownloadPanel } from "@/features/searchDetail/panels/DownloadPanel.tsx";
import { InfoPanel } from "@/features/searchDetail/panels/InfoPanel.tsx";
import { PropertiesPanel } from "@/features/searchDetail/panels/PropertiesPanel.tsx";
import { StatusPanel } from "@/features/searchDetail/panels/StatusPanel.tsx";
import { XrefPanel } from "@/features/searchDetail/panels/XrefPanel.tsx";
import { Breadcrumbs } from "@/features/shared/Breadcrumbs.tsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import type { FC } from "react";

type Props = {
  entryType: DBType;
};

export const SearchDetailLayout: FC<Props> = ({ entryType }) => {
  const breadcrumbsPaths = [
    { label: "Entries", to: "/entry" },
    { label: dbLabels[entryType], to: `/entry/${entryType}` },
    { label: "$identifier" },
  ];
  return (
    <main className={"flex flex-col gap-4 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"flex items-start gap-8"}>
        <div data-name={"leftCol"} className={"flex flex-grow-1 flex-col gap-4"}>
          <InfoPanel />
          <PropertiesPanel />
          <XrefPanel />
        </div>

        <div data-name={"rightCol"} className={"flex w-fit flex-col gap-4"}>
          <StatusPanel />
          <DownloadPanel />
        </div>
      </div>
    </main>
  );
};
