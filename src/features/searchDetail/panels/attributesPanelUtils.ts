import type { AttributeKeyValue } from "@/features/searchDetail/panels/AttributesPanel.tsx";
import { getNullableString, getUnknownRecord } from "@/utils/unknown.ts";

export const parseBioSampleAttributes = (properties: unknown): AttributeKeyValue[] => {
  const attributes = getUnknownRecord(properties)?.BioSample;
  const attributeList = getUnknownRecord(attributes)?.Attributes;
  const rawItems = getUnknownRecord(attributeList)?.Attribute;

  if (!Array.isArray(rawItems)) {
    return [];
  }

  return rawItems.flatMap((item) => {
    const attr = getUnknownRecord(item);
    if (!attr || typeof attr.content !== "string") {
      return [];
    }

    const key =
      getNullableString(attr.display_name) ??
      getNullableString(attr.attribute_name) ??
      getNullableString(attr.harmonized_name) ??
      "";

    return [
      {
        key,
        value: attr.content,
      },
    ];
  });
};
