import type {
  Accessibility,
  DbXrefsCount,
  Distribution,
  Organism,
  Organization,
  Publication,
  Status,
  Xref,
} from "@/types/api.ts";

export type SraType =
  | "sra-submission"
  | "sra-study"
  | "sra-experiment"
  | "sra-run"
  | "sra-sample"
  | "sra-analysis";

export type SRA = {
  type: SraType;
  identifier: string;
  isPartOf: "sra";
  name: string | null;
  url: string;
  organism: Organism | null;
  title: string | null;
  description: string | null;
  organization: Organization[];
  publication: Publication[];
  libraryStrategy: string[];
  librarySource: string[];
  librarySelection: string[];
  libraryLayout: string | null;
  platform: string | null;
  instrumentModel: string[];
  libraryName: string | null;
  libraryConstructionProtocol: string | null;
  analysisType: string | null;
  collectionDate: string | null;
  geoLocName: string | null;
  derivedFrom: Xref[];
  sameAs: Xref[];
  dbXrefs: Xref[];
  dbXrefsCount?: DbXrefsCount;
  distribution: Distribution[];
  properties: unknown;
  status: Status;
  accessibility: Accessibility;
  dateCreated: string | null;
  dateModified: string | null;
  datePublished: string | null;
};
