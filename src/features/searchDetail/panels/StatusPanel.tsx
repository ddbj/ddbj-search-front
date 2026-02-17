import { dbLabels } from "@/consts/db.ts";
import { SanitizedRow } from "@/features/searchDetail/panels/rows/SanitizedRow.tsx";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { formatToDateStr } from "@/utils/dateTime.ts";
import type { SearchDetailResponse } from "@/utils/searchDetailResponse.ts";
import type { FC } from "react";

type Props = { data: SearchDetailResponse };

export const StatusPanel: FC<Props> = ({ data }) => {
  const createdDate: string = data.dateCreated ? formatToDateStr(data.dateCreated) : "N/A";
  const modifiedDate: string = data.dateModified ? formatToDateStr(data.dateModified) : "N/A";
  const publishedDate: string = data.datePublished ? formatToDateStr(data.datePublished) : "N/A";
  return (
    <PanelWrapper>
      <InfoList gapX={4}>
        <SanitizedRow term={"Type"} value={dbLabels[data.type]} />
        <SanitizedRow term={"Accession"} value={data.identifier} />
        <InfoListItem term={"Status"} toolTipContent={"This is the description of Status"}>
          {data.status}
        </InfoListItem>
        <InfoListItem
          term={"Accessibility"}
          toolTipContent={"This is the description of accessibility"}
        >
          {data.accessibility}
        </InfoListItem>
        <InfoListItem term={"Submitted date"} contentNoWrap={true}>
          {createdDate}
        </InfoListItem>
        <InfoListItem term={"Published date"} contentNoWrap={true}>
          {publishedDate}
        </InfoListItem>
        <InfoListItem term={"Updated date"} contentNoWrap={true}>
          {modifiedDate}
        </InfoListItem>
      </InfoList>
    </PanelWrapper>
  );
};
