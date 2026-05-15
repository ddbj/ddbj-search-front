import { describe, expect, it } from "vitest";
import {
  parseBioSampleAttributes,
  parseSraSampleAttributes,
} from "@/features/searchDetail/panels/attributesPanelUtils.ts";

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

  it("keeps only the first attribute for duplicate resolved keys", () => {
    const result = parseBioSampleAttributes({
      BioSample: {
        Attributes: {
          Attribute: [
            {
              attribute_name: "collection_date",
              display_name: "collection date",
              content: "2024-01-01",
            },
            {
              attribute_name: "collection_date",
              display_name: "collection date",
              content: "2024-01-02",
            },
            {
              attribute_name: "host",
              content: "Homo sapiens",
            },
          ],
        },
      },
    });

    expect(result).toEqual([
      {
        key: "collection date",
        value: "2024-01-01",
      },
      {
        key: "host",
        value: "Homo sapiens",
      },
    ]);
  });
});

describe("parseSraSampleAttributes", () => {
  it("parses sample attributes from SRA Sample properties", () => {
    const result = parseSraSampleAttributes({
      SAMPLE_SET: {
        SAMPLE: {
          SAMPLE_ATTRIBUTES: {
            SAMPLE_ATTRIBUTE: [
              {
                TAG: "organism",
                VALUE: "Homo sapiens",
              },
              {
                TAG: "collection date",
                VALUE: "2018",
              },
            ],
          },
        },
      },
    });

    expect(result).toEqual([
      {
        key: "organism",
        value: "Homo sapiens",
      },
      {
        key: "collection date",
        value: "2018",
      },
    ]);
  });

  it.each([
    ["SAMPLE_SET is missing", {}],
    ["SAMPLE is missing", { SAMPLE_SET: {} }],
    ["SAMPLE_ATTRIBUTES is missing", { SAMPLE_SET: { SAMPLE: {} } }],
    ["SAMPLE_ATTRIBUTE is missing", { SAMPLE_SET: { SAMPLE: { SAMPLE_ATTRIBUTES: {} } } }],
  ])("returns an empty array when %s", (_name, properties) => {
    expect(parseSraSampleAttributes(properties)).toEqual([]);
  });

  it("returns an empty array when SAMPLE_ATTRIBUTE is not an array", () => {
    const result = parseSraSampleAttributes({
      SAMPLE_SET: {
        SAMPLE: {
          SAMPLE_ATTRIBUTES: {
            SAMPLE_ATTRIBUTE: {
              TAG: "organism",
              VALUE: "Homo sapiens",
            },
          },
        },
      },
    });

    expect(result).toEqual([]);
  });

  it("filters out attributes without string VALUE", () => {
    const result = parseSraSampleAttributes({
      SAMPLE_SET: {
        SAMPLE: {
          SAMPLE_ATTRIBUTES: {
            SAMPLE_ATTRIBUTE: [
              {
                TAG: "organism",
                VALUE: "Homo sapiens",
              },
              {
                TAG: "invalid",
                VALUE: null,
              },
              "not an attribute",
            ],
          },
        },
      },
    });

    expect(result).toEqual([
      {
        key: "organism",
        value: "Homo sapiens",
      },
    ]);
  });

  it("keeps only the first attribute for duplicate TAG values", () => {
    const result = parseSraSampleAttributes({
      SAMPLE_SET: {
        SAMPLE: {
          SAMPLE_ATTRIBUTES: {
            SAMPLE_ATTRIBUTE: [
              {
                TAG: "ENA-FIRST-PUBLIC",
                VALUE: "2024-02-15T12:49:24Z",
              },
              {
                TAG: "organism",
                VALUE: "Homo sapiens",
              },
              {
                TAG: "ENA-FIRST-PUBLIC",
                VALUE: "2024-02-15",
              },
            ],
          },
        },
      },
    });

    expect(result).toEqual([
      {
        key: "ENA-FIRST-PUBLIC",
        value: "2024-02-15T12:49:24Z",
      },
      {
        key: "organism",
        value: "Homo sapiens",
      },
    ]);
  });
});
