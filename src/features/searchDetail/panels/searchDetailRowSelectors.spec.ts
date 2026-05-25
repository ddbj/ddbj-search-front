import { describe, expect, it } from "vitest";
import type { SearchDetailResponse } from "@/api/types.ts";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";
import {
  createDetailMetadataRow,
  getAdditionalMetadataRows,
  getGrants,
  getOrganizations,
  getPublications,
} from "./searchDetailRowSelectors.ts";

const bioSampleResponse = {
  identifier: "SAMN000001",
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: "2024-01-02T00:00:00Z",
  datePublished: "2024-01-03T00:00:00Z",
  title: "BioSample Title",
  organism: null,
  description: null,
  type: "biosample",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [],
  dbXrefsCount: {},
  properties: {},
  distribution: [],
  isPartOf: "BioSample",
  name: null,
  url: null,
  sameAs: [],
  organization: null,
  publication: [],
  grant: [],
} satisfies SearchDetailResponse;

const withAdditionalMetadata = (metadata: Record<string, unknown>) => {
  return { ...bioSampleResponse, ...metadata } as SearchDetailResponse;
};

describe("getOrganizations", () => {
  it("returns organizations for sra-run responses", () => {
    const sraRunResponse = makeSraRunDetail("DRR000001");

    const result = getOrganizations(sraRunResponse);

    expect(result).toEqual(sraRunResponse.organization);
  });

  it("returns organization field for other detail responses", () => {
    const result = getOrganizations(bioSampleResponse);

    expect(result).toEqual(bioSampleResponse.organization);
  });
});

describe("getPublications", () => {
  it("returns publication field for every detail response", () => {
    const result = getPublications(bioSampleResponse);

    expect(result).toEqual(bioSampleResponse.publication);
  });
});

describe("getGrants", () => {
  it("returns grant field for every detail response", () => {
    const result = getGrants(bioSampleResponse);

    expect(result).toEqual(bioSampleResponse.grant);
  });
});

describe("getAdditionalMetadataRows", () => {
  it("returns no rows for DBTypes without additional metadata fields", () => {
    const result = getAdditionalMetadataRows(bioSampleResponse);

    expect(result).toEqual([]);
  });

  it("returns BioProject project type and relevance rows", () => {
    const result = getAdditionalMetadataRows(bioproject2);

    expect(result).toEqual([
      { kind: "stringArray", term: "Project Type", value: ["raw sequence reads"] },
      { kind: "stringArray", term: "Relevance", value: ["Agricultural"] },
    ]);
  });

  it("keeps BioProject empty arrays for the display layer to hide", () => {
    const result = getAdditionalMetadataRows(bioproject1);

    expect(result).toEqual([
      { kind: "stringArray", term: "Project Type", value: ["Genome sequencing"] },
      { kind: "stringArray", term: "Relevance", value: [] },
    ]);
  });
});

describe("createDetailMetadataRow", () => {
  it("creates a string metadata row", () => {
    const result = createDetailMetadataRow(withAdditionalMetadata({ centerName: "DDBJ" }), {
      key: "centerName",
      term: "Center Name",
      kind: "string",
    });

    expect(result).toEqual({ kind: "string", term: "Center Name", value: "DDBJ" });
  });

  it("creates an array<string> metadata row", () => {
    const result = createDetailMetadataRow(
      withAdditionalMetadata({ keywords: ["genome", "metagenome"] }),
      { key: "keywords", term: "Keywords", kind: "stringArray" },
    );

    expect(result).toEqual({
      kind: "stringArray",
      term: "Keywords",
      value: ["genome", "metagenome"],
    });
  });

  it("creates a derivedFrom metadata row for Xref arrays", () => {
    const derivedFrom = [
      {
        identifier: "SAMN000001",
        type: "biosample",
        url: "https://ddbj.nig.ac.jp/search/entry/biosample/SAMN000001",
      },
    ];

    const result = createDetailMetadataRow(withAdditionalMetadata({ derivedFrom }), {
      key: "derivedFrom",
      term: "Derived From",
      kind: "xrefArray",
    });

    expect(result).toEqual({
      kind: "xrefArray",
      term: "Derived From",
      value: derivedFrom,
    });
  });

  it("creates a package metadata row", () => {
    const result = createDetailMetadataRow(
      withAdditionalMetadata({ package: { displayName: "MIGS", name: "migs" } }),
      { key: "package", term: "Package", kind: "package" },
    );

    expect(result).toEqual({
      kind: "package",
      term: "Package",
      value: { displayName: "MIGS", name: "migs" },
    });
  });

  it("ignores values that do not match the configured metadata kind", () => {
    const result = createDetailMetadataRow(withAdditionalMetadata({ keywords: ["genome", 1] }), {
      key: "keywords",
      term: "Keywords",
      kind: "stringArray",
    });

    expect(result).toBeNull();
  });
});
