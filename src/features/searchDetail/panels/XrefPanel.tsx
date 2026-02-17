import { useMemo, type FC } from "react";
import { getDBXrefAPIPath } from "@/api/paths.ts";
import { MAX_DB_XREFS } from "@/consts/counts.ts";
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
  dbType: string;
};

export const XrefPanel: FC<Props> = ({ xrefs, identifier, dbType }) => {
  const isTruncated = useMemo(() => {
    return xrefs.some((entry) => entry.items.length !== entry.actualCount);
  }, [xrefs]);

  return xrefs.length === 0 ? (
    <></>
  ) : (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>DB Xrefs</div>
      {isTruncated && <TruncatedMessage identifier={identifier} dbType={dbType} />}
      <InfoList>
        {xrefs.map((entry) => {
          return (
            <XrefListItem key={`${entry.dbName}`} {...{ ...entry, isTruncated }}></XrefListItem>
          );
        })}
      </InfoList>
    </PanelWrapper>
  );
};

const TruncatedMessage: FC<Pick<Props, "identifier" | "dbType">> = ({ identifier, dbType }) => {
  const apiURL = getDBXrefAPIPath(dbType, identifier);
  return (
    <div className={"rounded bg-fire-bush-50 p-2 text-sm"}>
      In favor of readability, the list of DB xrefs is truncated to {MAX_DB_XREFS} entries. For the
      complete list, please refer to the{" "}
      <a href={apiURL} target={"_blank"} className={"text-link-primary"}>
        dedicated API.
      </a>
    </div>
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
