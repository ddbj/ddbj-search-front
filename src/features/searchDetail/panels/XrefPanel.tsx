import { dbTypeList, getDbLabel, getXrefDbLabel, xrefTypeList } from "@/consts/db.ts";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem, type XrefListItemProps } from "@/features/searchDetail/ui/XrefListItem.tsx";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";
import { isInternalDbLink, sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";
import type { Xref } from "@/api/components.ts";
import type { FC } from "react";

type Props = {
  xrefs: Xref[];
};

export const XrefPanel: FC<Props> = ({ xrefs }) => {
  const parsed = parseRefs(xrefs);
  if (xrefs.length === 0) {
    return <></>;
  }
  return (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>DB Xrefs</div>
      <InfoList>
        {parsed.map((entry) => {
          return (
            <XrefListItem
              key={`${entry.dbName}`}
              dbName={entry.dbName}
              items={entry.items}
            ></XrefListItem>
          );
        })}
      </InfoList>
    </PanelWrapper>
  );
};

type XrefItemProps = XrefListItemProps["items"][0];
const parseRefs = (refs: Xref[]): XrefListItemProps[] => {
  const reduced = refs.reduce<[string, XrefItemProps[]][]>((acc, ref) => {
    const url = sanitizeDbLink(ref.url);
    const isExternal = !isInternalDbLink(ref.url);
    const label = ref.identifier;
    const item: XrefItemProps = { url, label, isExternal };
    const dbEntry = acc.find(([dbName]) => dbName === ref.type);
    if (!dbEntry) {
      return [...acc, [ref.type, [item]]];
    } else {
      dbEntry[1].push(item);
      return acc;
    }
  }, []);
  const reordered = reorderXrefs(reduced);
  const result = reordered.map(([dbKey, items]) => {
    const dbName = getXrefDbLabel(dbKey);
    return { dbName, items };
  });
  console.log(result);

  return result;
};

export const __test__XrefPanel = { parseRefs };
