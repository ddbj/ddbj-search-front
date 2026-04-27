// 共通型は ddbj-search-converter v0.3 の Pydantic schema (`schema.py`) に揃える。

import type { BioProject } from "@/types/BioProject.ts";
import type { BioSample } from "@/types/BioSample.ts";
import type { GEA } from "@/types/GEA.ts";
import type { JGA } from "@/types/JGA.ts";
import type { MetaboBank } from "@/types/MetaboBank.ts";
import type { SRA } from "@/types/SRA.ts";

export type EncodingFormat = "JSON" | "JSON-LD" | "XML" | "FASTQ" | "SRA";

export type Distribution = {
  type: string;
  encodingFormat: EncodingFormat;
  contentUrl: string;
};

export type Organism = {
  identifier: string | null;
  name: string | null;
};

export type OrganizationType = "institute" | "center" | "consortium" | "lab";
export type OrganizationRole = "owner" | "participant" | "submitter" | "broker";

export type Organization = {
  name: string | null;
  abbreviation: string | null;
  role: OrganizationRole | null;
  organizationType: OrganizationType | null;
  department: string | null;
  url: string | null;
};

export type PublicationDbType = "pubmed" | "doi" | "pmc" | "other";

export type Publication = {
  id: string | null;
  title: string | null;
  date: string | null;
  reference: string | null;
  url: string | null;
  dbType: PublicationDbType | null;
};

export type Grant = {
  id: string | null;
  title: string | null;
  agency: Organization[];
};

export type ExternalLink = {
  url: string;
  label: string;
};

export type XrefType =
  | "biosample"
  | "bioproject"
  | "sra-experiment"
  | "sra-run"
  | "sra-sample"
  | "sra-study"
  | "sra-submission"
  | "sra-analysis"
  | "jga-study"
  | "jga-dataset"
  | "jga-dac"
  | "jga-policy"
  | "gea"
  | "geo"
  | "humandbs"
  | "insdc"
  | "insdc-assembly"
  | "insdc-master"
  | "metabobank"
  | "pubmed"
  | "taxonomy";

export type Xref = {
  identifier: string;
  type: XrefType;
  url: string;
};

export type BioSamplePackage = {
  name: string;
  displayName: string | null;
};

export type Status = "public" | "private" | "suppressed" | "withdrawn";
export type Accessibility = "public-access" | "controlled-access";

export type DbXrefsCount = Record<string, number>;

export type ElasticSearchSource = BioProject | BioSample | SRA | JGA | GEA | MetaboBank;
