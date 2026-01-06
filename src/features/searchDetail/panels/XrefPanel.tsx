import { dbLabels, dbTypeList, dbTypes, getDbLabel, isDBType } from "@/consts/db.ts";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem } from "@/features/searchDetail/ui/XrefListItem.tsx";
import type { Xref } from "@/api/components.ts";
import type { FC } from "react";

type Props = {
  xrefs: Xref[];
};

export const XrefPanel: FC<Props> = ({ xrefs }) => {
  const parsed = parseRefs(xrefs);
  return (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>DB Xref</div>
      <InfoList>
        {parsed.map((entry) => {
          return (
            <XrefListItem
              key={`${entry.dbName}`}
              term={entry.dbName}
              values={entry.items}
            ></XrefListItem>
          );
        })}
      </InfoList>
    </PanelWrapper>
  );
};

type ParsedRef = {
  dbName: string;
  items: [string, string][];
};
const parseRefs = (refs: Xref[]): ParsedRef[] => {
  const result = refs
    .reduce<ParsedRef[]>((acc, ref) => {
      //todo convert url
      const item: [string, string] = [ref.identifier, ref.url];
      const dbEntry = acc.find((entry) => entry.dbName === ref.type);
      if (!dbEntry) {
        return [...acc, { dbName: ref.type, items: [item] }];
      } else {
        dbEntry.items = [...dbEntry.items, item];
        return acc;
      }
    }, [])
    .sort((a, b) => {
      const indexA = dbTypeList.indexOf(a.dbName);
      const indexB = dbTypeList.indexOf(b.dbName);

      // 見つからない（-1）場合は後ろに持っていく
      const orderA = indexA === -1 ? Infinity : indexA;
      const orderB = indexB === -1 ? Infinity : indexB;

      return orderA - orderB;
    })
    // Rename the database identifier from dbType to dbLabel
    .map<ParsedRef>((item) => {
      const dbName = getDbLabel(item.dbName);
      return { ...item, dbName };
    });

  return result;
};

export const __test__XrefPanel = { parseRefs };
