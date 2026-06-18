import { clsx } from "clsx";
import { type FC } from "react";
import { dbLabels } from "@/consts/db.ts";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import {
  accessibilityTooltipDescriptions,
  statusTooltipDescriptions,
  visibleAccessibilityTooltipValues,
  visibleStatusTooltipValues,
} from "@/consts/tooltipDescriptions.ts";
import { formatToDateStr } from "@/lib/formatting/dateTime.ts";
import type { SearchDetailResponse } from "@/schema/api/types.ts";
import {
  accessibilityLabels,
  getAccessibilityLabels,
  getStatusLabels,
  statusLabels,
} from "@/schema/api/valueTypes.ts";
import { SanitizedRow } from "@/views/searchDetail/components/panels/rows/SanitizedRow.tsx";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";
import { PanelWrapper } from "@/views/searchDetail/components/ui/PanelWrapper.tsx";
import { LockIcon } from "@/views/shared/icons/LockIcon.tsx";

type Props = { data: SearchDetailResponse };

export const StatusPanel: FC<Props> = ({ data }) => {
  const createdDate: string = data.dateCreated ? formatToDateStr(data.dateCreated) : "N/A";
  const modifiedDate: string = data.dateModified ? formatToDateStr(data.dateModified) : "N/A";
  const publishedDate: string = data.datePublished ? formatToDateStr(data.datePublished) : "N/A";
  const accessibilityLabel = getAccessibilityLabels(data.accessibility);
  return (
    <PanelWrapper>
      <InfoList gapX={4}>
        <SanitizedRow term={detailFieldLabels.type} value={dbLabels[data.type]} />
        <SanitizedRow term={detailFieldLabels.accession} value={data.identifier} />
        <InfoListItem term={detailFieldLabels.status} toolTipContent={<StatusHelp />}>
          {getStatusLabels(data.status)}
        </InfoListItem>
        <InfoListItem term={detailFieldLabels.accessibility} toolTipContent={<AccessibilityHelp />}>
          {data.accessibility === "controlled-access" ? (
            <span className={"flex h-5 items-center gap-x-0.5 leading-5"}>
              <span className={"inline-flex h-5 shrink-0 items-center"}>
                <LockIcon className={"h-5 fill-current"} />
              </span>
              <span>{accessibilityLabel}</span>
            </span>
          ) : (
            accessibilityLabel
          )}
        </InfoListItem>
        <InfoListItem term={detailFieldLabels.dateCreated} contentNoWrap={true}>
          {createdDate}
        </InfoListItem>
        <InfoListItem term={detailFieldLabels.datePublished} contentNoWrap={true}>
          {publishedDate}
        </InfoListItem>
        <InfoListItem term={detailFieldLabels.dateModified} contentNoWrap={true}>
          {modifiedDate}
        </InfoListItem>
      </InfoList>
    </PanelWrapper>
  );
};

const helpWrapperClasses = clsx("flex flex-col gap-y-1");
const StatusHelp: FC = () => {
  return (
    <dl className={helpWrapperClasses}>
      {visibleStatusTooltipValues.map((value) => (
        <div key={value}>
          <dt>[{statusLabels[value]}]</dt>
          <dd>{statusTooltipDescriptions[value]}</dd>
        </div>
      ))}
    </dl>
  );
};

const AccessibilityHelp: FC = () => {
  return (
    <dl className={helpWrapperClasses}>
      {visibleAccessibilityTooltipValues.map((value) => (
        <div key={value}>
          <dt>[{accessibilityLabels[value]}]</dt>
          <dd>{accessibilityTooltipDescriptions[value]}</dd>
        </div>
      ))}
    </dl>
  );
};
