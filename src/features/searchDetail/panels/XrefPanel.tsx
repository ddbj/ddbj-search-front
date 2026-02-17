import { dbTypeList, getDbLabel, getXrefDbLabel, xrefTypeList } from "@/consts/db.ts";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem, type XrefListItemProps } from "@/features/searchDetail/ui/XrefListItem.tsx";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";
import { isInternalDbLink, sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";
import type { Xref } from "@/api/components.ts";
import type { DbXrefsCount } from "@/api/detail/base.ts";
import type { FC } from "react";

type Props = {
  xrefs: Xref[];
  count: DbXrefsCount;
};

export const XrefPanel: FC<Props> = ({ xrefs, count }) => {
  const parsed = parseRefs(xrefs, count);
  if (xrefs.length === 0) {
    return <></>;
  }
  return (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>DB Xrefs</div>
      <InfoList>
        {parsed.map((entry) => {
          return <XrefListItem key={`${entry.dbName}`} {...entry}></XrefListItem>;
        })}
      </InfoList>
    </PanelWrapper>
  );
};

const parseRefs = (refs: Xref[], count: DbXrefsCount): XrefListItemProps[] => {
  return reorderXrefs(count).map(([dbKey, actualCount]) => {
    const dbName = getXrefDbLabel(dbKey);
    const items = refs
      .filter((ref) => ref.type === dbKey)
      .map((ref) => {
        const url = sanitizeDbLink(ref.url);
        const isExternal = !isInternalDbLink(ref.url);
        const label = ref.identifier;
        return { url, isExternal, label };
      })
      .sort((a, b) => a.label.localeCompare(b.label));
    return { dbName, actualCount, items };
  });
};

export const __test__XrefPanel = { parseRefs };
