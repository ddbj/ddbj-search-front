import { describe, expect, it } from "vitest";
import type { SearchDetailResponse } from "@/api/types.ts";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { biosample1 } from "@/msw/data/biosample1.ts";
import { makeJgaDatasetDetail } from "@/msw/data/jgaDataset.ts";
import { makeJgaStudyDetail } from "@/msw/data/jgaStudy.ts";
import { makeSraAnalysisDetail } from "@/msw/data/sraAnalysis.ts";
import { makeSraExperimentDetail } from "@/msw/data/sraExperiment.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";
import { sraSample1 } from "@/msw/data/sraSample1.ts";
import { normalizeDetailMetadataRows } from "./rows/detailMetadataRowUtils.ts";
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
  model: [],
  package: null,
  collectionDate: null,
  geoLocName: null,
  strain: null,
  host: null,
  isolate: null,
  derivedFrom: [],
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
    const result = getAdditionalMetadataRows(makeSraRunDetail("DRR000001"));

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

  it("returns BioSample-specific metadata rows", () => {
    const result = getAdditionalMetadataRows(biosample1);

    expect(result).toEqual([
      { kind: "stringArray", term: "Model", value: ["Generic"] },
      { kind: "package", term: "Package", value: { displayName: "Generic", name: "Generic.1.0" } },
      { kind: "string", term: "Collection Date", value: "2022-07-19" },
      { kind: "string", term: "Geographic Location", value: "USA" },
      { kind: "string", term: "Strain", value: "BPH-1" },
      { kind: "string", term: "Host", value: "Homo sapiens" },
      { kind: "string", term: "Isolate", value: "BPH-1-M-E2" },
      { kind: "xrefArray", term: "Derived From", value: biosample1.derivedFrom },
    ]);
  });

  it("lets the display layer hide empty BioSample metadata values", () => {
    const result = normalizeDetailMetadataRows(getAdditionalMetadataRows(bioSampleResponse));

    expect(result).toEqual([]);
  });

  it("returns SRA Sample-specific metadata rows", () => {
    const result = getAdditionalMetadataRows(sraSample1);

    expect(result).toEqual([
      { kind: "string", term: "Collection Date", value: "2020-02-12" },
      { kind: "string", term: "Geographic Location", value: "United Kingdom" },
      { kind: "xrefArray", term: "Derived From", value: sraSample1.derivedFrom },
    ]);
  });

  it("lets the display layer hide empty SRA Sample metadata values", () => {
    const emptySraSample = {
      ...sraSample1,
      collectionDate: null,
      geoLocName: null,
      derivedFrom: [],
    } satisfies SearchDetailResponse;

    const result = normalizeDetailMetadataRows(getAdditionalMetadataRows(emptySraSample));

    expect(result).toEqual([]);
  });

  it("returns SRA Experiment-specific metadata rows", () => {
    const sraExperiment = makeSraExperimentDetail("SRX000001");

    const result = getAdditionalMetadataRows(sraExperiment);

    expect(result).toEqual([
      { kind: "string", term: "Instrument Model", value: "NextSeq 500" },
      { kind: "string", term: "Library Layout", value: "PAIRED" },
      { kind: "string", term: "Library Selection", value: "PCR" },
      { kind: "string", term: "Library Source", value: "TRANSCRIPTOMIC" },
      { kind: "string", term: "Library Strategy", value: "RNA-Seq" },
      { kind: "string", term: "Platform", value: "ILLUMINA" },
      { kind: "string", term: "Library Name", value: "MSW SRA Experiment Library" },
      {
        kind: "string",
        term: "Library Construction Protocol",
        value: "PolyA RNA was isolated and prepared for paired-end sequencing.",
      },
    ]);
  });

  it("lets the display layer hide empty SRA Experiment metadata values", () => {
    const emptySraExperiment = {
      ...makeSraExperimentDetail("SRX000001"),
      instrumentModel: null,
      libraryLayout: "",
      librarySelection: null,
      librarySource: "",
      libraryStrategy: null,
      platform: "",
      libraryName: null,
      libraryConstructionProtocol: "",
    } satisfies SearchDetailResponse;

    const result = normalizeDetailMetadataRows(getAdditionalMetadataRows(emptySraExperiment));

    expect(result).toEqual([]);
  });

  it("returns SRA Analysis-specific metadata rows", () => {
    const result = getAdditionalMetadataRows(makeSraAnalysisDetail("SRZ000001"));

    expect(result).toEqual([
      { kind: "string", term: "Analysis Type", value: "SEQUENCE_VARIATION" },
    ]);
  });

  it("lets the display layer hide empty SRA Analysis metadata values", () => {
    const emptySraAnalysis = {
      ...makeSraAnalysisDetail("SRZ000001"),
      analysisType: "",
    } satisfies SearchDetailResponse;

    const result = normalizeDetailMetadataRows(getAdditionalMetadataRows(emptySraAnalysis));

    expect(result).toEqual([]);
  });

  it("returns JGA Dataset-specific metadata rows", () => {
    const result = getAdditionalMetadataRows(makeJgaDatasetDetail("JGAD000001"));

    expect(result).toEqual([{ kind: "stringArray", term: "Dataset Type", value: ["Exome"] }]);
  });

  it("lets the display layer hide empty JGA Dataset metadata values", () => {
    const emptyJgaDataset = {
      ...makeJgaDatasetDetail("JGAD000001"),
      datasetType: [],
    } satisfies SearchDetailResponse;

    const result = normalizeDetailMetadataRows(getAdditionalMetadataRows(emptyJgaDataset));

    expect(result).toEqual([]);
  });

  it("returns JGA Study-specific metadata rows", () => {
    const result = getAdditionalMetadataRows(makeJgaStudyDetail("JGAS000001"));

    expect(result).toEqual([
      { kind: "stringArray", term: "Study Type", value: ["Case-Control"] },
      {
        kind: "stringArray",
        term: "Vendor",
        value: ["Japanese Genotype-phenotype Archive"],
      },
    ]);
  });

  it("lets the display layer hide empty JGA Study metadata values", () => {
    const emptyJgaStudy = {
      ...makeJgaStudyDetail("JGAS000001"),
      studyType: [],
      vendor: [],
    } satisfies SearchDetailResponse;

    const result = normalizeDetailMetadataRows(getAdditionalMetadataRows(emptyJgaStudy));

    expect(result).toEqual([]);
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
