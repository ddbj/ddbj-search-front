import type { DbXrefsCount, Xref } from "@/api/detail/base.ts";
import { getXrefDbLabel } from "@/consts/db.ts";
import { reorderXrefs } from "@/lib/entry/reorderXrefs.ts";
import { resolveDbLink } from "@/lib/sanitizing/sanitizeDbLink.ts";
import type { XrefListItemProps } from "@/views/searchDetail/components/ui/XrefListItem.tsx";

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
  const label = ref.identifier;
  return { link: resolveDbLink(ref.url), label };
};
