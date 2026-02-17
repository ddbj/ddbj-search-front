import { useMemo, type FC } from "react";
import { dbTypeList, getDbLabel, getXrefDbLabel, xrefTypeList } from "@/consts/db.ts";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem, type XrefListItemProps } from "@/features/searchDetail/ui/XrefListItem.tsx";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";
import { isInternalDbLink, sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";
import type { Xref } from "@/api/components.ts";
import type { DbXrefsCount } from "@/api/detail/base.ts";

type Props = {
  xrefs: XrefListItemProps[];
  identifier: string;
};

export const XrefPanel: FC<Props> = ({ xrefs }) => {
  // const parsed = parseRefs(xrefs, count);
  // const isTruncated = useMemo(() => {
  //   return parsed.some((entry) => entry.items.length !== entry.actualCount);
  // }, [parsed]);

  return xrefs.length === 0 ? (
    <></>
  ) : (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}></div>
      <InfoList>
        {xrefs.map((entry) => {
          return <XrefListItem key={`${entry.dbName}`} {...entry}></XrefListItem>;
        })}
      </InfoList>
    </PanelWrapper>
  );
};

export const parseRefs = (refs: Xref[], count: DbXrefsCount): XrefListItemProps[] => {
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
