import type {
  Accessibility,
  BioSamplePackage,
  DbXrefsCount,
  Distribution,
  Organism,
  Organization,
  Status,
  Xref,
} from "@/types/api.ts";

export type BioSample = {
  type: "biosample";
  identifier: string;
  isPartOf: "biosample";
  name: string | null;
  url: string;
  organism: Organism | null;
  title: string | null;
  description: string | null;
  derivedFrom: Xref[];
  geoLocName: string | null;
  collectionDate: string | null;
  host: string | null;
  strain: string | null;
  isolate: string | null;
  organization: Organization[];
  model: string[];
  package: BioSamplePackage | null;
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
