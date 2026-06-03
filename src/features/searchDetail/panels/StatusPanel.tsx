import { clsx } from "clsx";
import { Fragment, type FC } from "react";
import {
  accessibilityLabels,
  getAccessibilityLabels,
  getStatusLabels,
  statusLabels,
} from "@/api/consts.ts";
import type { SearchDetailResponse } from "@/api/types.ts";
import { dbLabels } from "@/consts/db.ts";
import {
  accessibilityTooltipDescriptions,
  statusTooltipDescriptions,
  visibleAccessibilityTooltipValues,
  visibleStatusTooltipValues,
} from "@/consts/tooltipDescriptions.ts";
import { SanitizedRow } from "@/features/searchDetail/panels/rows/SanitizedRow.tsx";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { LockIcon } from "@/features/shared/graphics/LockIcon.tsx";
import { formatToDateStr } from "@/utils/dateTime.ts";

type Props = { data: SearchDetailResponse };

export const StatusPanel: FC<Props> = ({ data }) => {
  const createdDate: string = data.dateCreated ? formatToDateStr(data.dateCreated) : "N/A";
  const modifiedDate: string = data.dateModified ? formatToDateStr(data.dateModified) : "N/A";
  const publishedDate: string = data.datePublished ? formatToDateStr(data.datePublished) : "N/A";
  const accessibilityLabel = getAccessibilityLabels(data.accessibility);
  return (
    <PanelWrapper>
      <InfoList gapX={4}>
        <SanitizedRow term={"Type"} value={dbLabels[data.type]} />
        <SanitizedRow term={"Accession"} value={data.identifier} />
        <InfoListItem term={"Status"} toolTipContent={<StatusHelp />}>
          {getStatusLabels(data.status)}
        </InfoListItem>
        <InfoListItem term={"Accessibility"} toolTipContent={<AccessibilityHelp />}>
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
