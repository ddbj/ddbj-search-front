import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { DownloadListItem } from "../ui/DownloadListItem";
import type { FC } from "react";

type Props = {
  className?: string;
};

export const DownloadPanel: FC<Props> = ({ className }) => {
  return (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>Download</div>
      <InfoList useGrid={false}>
        <DownloadListItem fileName={"SRA1168454.experiment.xml"} httpsLink={"#"} ftpLink={"#"} />
        <DownloadListItem fileName={"SRA1168454.experiment.xml"} httpsLink={"#"} ftpLink={"#"} />
        <DownloadListItem fileName={"SRA1168454.experiment.xml"} httpsLink={"#"} ftpLink={"#"} />
      </InfoList>
    </PanelWrapper>
  );
};
