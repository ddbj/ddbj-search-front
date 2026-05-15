import { describe, expect, it } from "vitest";
import { parseBioSampleAttributes } from "@/features/searchDetail/panels/attributesPanelUtils.ts";

describe("parseBioSampleAttributes", () => {
  it("parses attributes from BioSample properties", () => {
    const result = parseBioSampleAttributes({
      BioSample: {
        Attributes: {
          Attribute: [
            {
              attribute_name: "source_name",
              display_name: "source name",
              harmonized_name: "source_name",
              content: "ATCC cell line cells",
            },
            {
              attribute_name: "host_race",
              content: "NAM",
            },
          ],
        },
      },
    });

    expect(result).toEqual([
      {
        key: "source name",
        value: "ATCC cell line cells",
      },
      {
        key: "host_race",
        value: "NAM",
      },
    ]);
  });

  it.each([
    ["BioSample is missing", {}],
    ["Attributes is missing", { BioSample: {} }],
    ["Attribute is missing", { BioSample: { Attributes: {} } }],
  ])("returns an empty array when %s", (_name, properties) => {
    expect(parseBioSampleAttributes(properties)).toEqual([]);
  });

  it("returns an empty array when Attribute is not an array", () => {
    const result = parseBioSampleAttributes({
      BioSample: {
        Attributes: {
          Attribute: {
            attribute_name: "source_name",
            content: "ATCC cell line cells",
          },
        },
      },
    });

    expect(result).toEqual([]);
  });

  it("filters out attributes without string content", () => {
    const result = parseBioSampleAttributes({
      BioSample: {
        Attributes: {
          Attribute: [
            {
              attribute_name: "source_name",
              content: "ATCC cell line cells",
            },
            {
              attribute_name: "invalid",
              content: null,
            },
            "not an attribute",
          ],
        },
      },
    });

    expect(result).toEqual([
      {
        key: "source_name",
        value: "ATCC cell line cells",
      },
    ]);
  });
});
