import type { Xref } from "@/api/detail/base.ts";

export type DetailMetadataPackage = {
  displayName?: string | null;
  name?: string | null;
};

export type DetailMetadataRow =
  | {
      kind: "string";
      term: string;
      value: string | null | undefined;
    }
  | {
      kind: "stringArray";
      term: string;
      value: string[] | null | undefined;
    }
  | {
      kind: "xrefArray";
      term: string;
      value: Xref[] | null | undefined;
    }
  | {
      kind: "package";
      term: string;
      value: DetailMetadataPackage | null | undefined;
    };

export type DisplayableDetailMetadataRow =
  | {
      kind: "text";
      term: string;
      value: string;
    }
  | {
      kind: "xrefs";
      term: string;
      value: Xref[];
    };

const normalizeString = (value: string | null | undefined) => {
  const normalizedValue = value?.trim();
  return normalizedValue ? normalizedValue : null;
};

const normalizeStringArray = (value: string[] | null | undefined) => {
  if (!value || value.length === 0) {
    return null;
  }

  const values = value
    .map((item) => normalizeString(item))
    .filter((item): item is string => item !== null);

  return values.length > 0 ? values.join(", ") : null;
};

export const formatDetailMetadataPackage = (value: DetailMetadataPackage | null | undefined) => {
  if (!value) {
    return null;
  }

  const displayName = normalizeString(value.displayName);
  const name = normalizeString(value.name);

  if (displayName && name) {
    return `${displayName} (${name})`;
  }

  return displayName ?? name;
};

export const normalizeDetailMetadataRows = (
  rows: DetailMetadataRow[],
): DisplayableDetailMetadataRow[] => {
  return rows.flatMap<DisplayableDetailMetadataRow>((row) => {
    switch (row.kind) {
      case "string": {
        const value = normalizeString(row.value);
        return value ? [{ kind: "text", term: row.term, value }] : [];
      }
      case "stringArray": {
        const value = normalizeStringArray(row.value);
        return value ? [{ kind: "text", term: row.term, value }] : [];
      }
      case "xrefArray": {
        return row.value && row.value.length > 0
          ? [{ kind: "xrefs", term: row.term, value: row.value }]
          : [];
      }
      case "package": {
        const value = formatDetailMetadataPackage(row.value);
        return value ? [{ kind: "text", term: row.term, value }] : [];
      }
    }
  });
};
