export type UnknownRecord = Record<string, unknown>;

export const getUnknownRecord = (value: unknown): UnknownRecord | null => {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null;
};

export const getNullableString = (value: unknown): string | null => {
  return typeof value === "string" ? value : null;
};
