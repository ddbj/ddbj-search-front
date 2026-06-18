import { getNullableString, getUnknownRecord } from "@/utils/unknown.ts";
import type { AttributeKeyValue } from "@/views/searchDetail/components/panels/AttributesPanel.tsx";

export const parseBioSampleAttributes = (properties: unknown): AttributeKeyValue[] => {
  const attributes = getUnknownRecord(properties)?.BioSample;
  const attributeList = getUnknownRecord(attributes)?.Attributes;
  const rawItems = getUnknownRecord(attributeList)?.Attribute;

  if (!Array.isArray(rawItems)) {
    return [];
  }

  const seenKeys = new Set<string>();

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
    if (seenKeys.has(key)) {
      return [];
    }
    seenKeys.add(key);

    return [
      {
        key,
        value: attr.content,
      },
    ];
  });
};

export const parseSraSampleAttributes = (properties: unknown): AttributeKeyValue[] => {
  const sampleSet = getUnknownRecord(properties)?.SAMPLE_SET;
  const sample = getUnknownRecord(sampleSet)?.SAMPLE;
  const attributes = getUnknownRecord(sample)?.SAMPLE_ATTRIBUTES;
  const rawItems = getUnknownRecord(attributes)?.SAMPLE_ATTRIBUTE;

  if (!Array.isArray(rawItems)) {
    return [];
  }

  const seenKeys = new Set<string>();

  return rawItems.flatMap((item) => {
    const attr = getUnknownRecord(item);
    if (!attr || typeof attr.VALUE !== "string") {
      return [];
    }
    const key = getNullableString(attr.TAG) ?? "";
    if (seenKeys.has(key)) {
      return [];
    }
    seenKeys.add(key);

    return [
      {
        key,
        value: attr.VALUE,
      },
    ];
  });
};
