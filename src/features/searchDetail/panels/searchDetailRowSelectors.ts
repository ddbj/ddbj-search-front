import type { Xref } from "@/api/detail/base.ts";
import type { SearchDetailResponse } from "@/api/types.ts";
import type {
  DetailMetadataPackage,
  DetailMetadataRow,
} from "@/features/searchDetail/panels/rows/detailMetadataRowUtils.ts";

export type DetailMetadataFieldConfig = {
  key: string;
  term: string;
  kind: DetailMetadataRow["kind"];
};

const additionalMetadataFieldsByType: Partial<
  Record<SearchDetailResponse["type"], DetailMetadataFieldConfig[]>
> = {};

const getRecordValue = (res: SearchDetailResponse, key: string) => {
  return (res as SearchDetailResponse & Record<string, unknown>)[key];
};

const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
};

const isXref = (value: unknown): value is Xref => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    typeof record.identifier === "string" &&
    typeof record.type === "string" &&
    typeof record.url === "string"
  );
};

const isXrefArray = (value: unknown): value is Xref[] => {
  return Array.isArray(value) && value.every(isXref);
};

const isDetailMetadataPackage = (value: unknown): value is DetailMetadataPackage => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const record = value as Record<string, unknown>;
  const displayName = record.displayName;
  const name = record.name;

  return (
    (typeof displayName === "string" || displayName === null || displayName === undefined) &&
    (typeof name === "string" || name === null || name === undefined)
  );
};

export const createDetailMetadataRow = (
  res: SearchDetailResponse,
  config: DetailMetadataFieldConfig,
): DetailMetadataRow | null => {
  const value = getRecordValue(res, config.key);

  switch (config.kind) {
    case "string":
      return typeof value === "string" || value === null || value === undefined
        ? { kind: config.kind, term: config.term, value }
        : null;
    case "stringArray":
      return isStringArray(value) || value === null || value === undefined
        ? { kind: config.kind, term: config.term, value }
        : null;
    case "xrefArray":
      return isXrefArray(value) || value === null || value === undefined
        ? { kind: config.kind, term: config.term, value }
        : null;
    case "package":
      return isDetailMetadataPackage(value) || value === null || value === undefined
        ? { kind: config.kind, term: config.term, value }
        : null;
  }
};

export const getAdditionalMetadataRows = (res: SearchDetailResponse): DetailMetadataRow[] => {
  const configs = additionalMetadataFieldsByType[res.type] ?? [];

  return configs
    .map((config) => createDetailMetadataRow(res, config))
    .filter((row): row is DetailMetadataRow => row !== null);
};

export const getPublications = (res: SearchDetailResponse) => {
  return res.publication;
};

export const getGrants = (res: SearchDetailResponse) => {
  return res.grant;
};

export const getOrganizations = (res: SearchDetailResponse) => {
  return res.organization;
};

export const getExternalLinks = (res: SearchDetailResponse) => {
  return res.externalLink;
};

export const getSameAs = (res: SearchDetailResponse) => {
  return res.sameAs;
};
