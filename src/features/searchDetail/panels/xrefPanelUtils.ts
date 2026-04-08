import { getXrefDbLabel } from "@/consts/db.ts";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";
import { isInternalDbLink, sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";
import type { DbXrefsCount, Xref } from "@/api/detail/base.ts";
import type { XrefListItemProps } from "@/features/searchDetail/ui/XrefListItem.tsx";

export const parseRefs = (refs: Xref[] | null, count: DbXrefsCount): XrefListItemProps[] => {
  return reorderXrefs(count).map(([dbKey, actualCount]) => {
    const dbName = getXrefDbLabel(dbKey);
    const items = (refs ?? [])
      .filter((ref) => ref.type === dbKey)
      .map(parseXrefItem)
      .sort((a, b) => a.label.localeCompare(b.label));
    return { dbName, actualCount, items };
  });
};

export const parseXrefItem = (ref: Xref): XrefListItemProps["items"][0] => {
  const url = sanitizeDbLink(ref.url);
  const isExternal = !isInternalDbLink(ref.url);
  const label = ref.identifier;
  return { url, isExternal, label };
};
