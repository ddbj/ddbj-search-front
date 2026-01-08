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
        <InfoListItem term={"Status"} toolTipContent={"This is the description of Status"}>
          {data.status}
        </InfoListItem>
        <InfoListItem term={"Visibility"} toolTipContent={"This is the description of visibility"}>
          {data.visibility}
        </InfoListItem>
        <InfoListItem term={"Created date"}>{createdDate}</InfoListItem>
        <InfoListItem term={"Modified date"}>{modifiedDate}</InfoListItem>
        <InfoListItem term={"Published date"}>{publishedDate}</InfoListItem>
      </InfoList>
    </PanelWrapper>
  );
};
