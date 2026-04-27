import type {
  DbXrefsCount,
  Distribution,
  ExternalLink,
  Grant,
  Organism,
  Organization,
  Publication,
  Xref,
} from "@/types/api.ts";

export type JgaType = "jga-study" | "jga-dataset" | "jga-dac" | "jga-policy";

export type JGA = {
  type: JgaType;
  identifier: string;
  isPartOf: "jga";
  name: string | null;
  url: string;
  organism: Organism | null;
  title: string | null;
  description: string | null;
  organization: Organization[];
  publication: Publication[];
  grant: Grant[];
  externalLink: ExternalLink[];
  studyType: string[];
  datasetType: string[];
  vendor: string[];
  sameAs: Xref[];
  dbXrefs: Xref[];
  dbXrefsCount?: DbXrefsCount;
  distribution: Distribution[];
  properties: unknown;
  status: "public";
  accessibility: "controlled-access";
  dateCreated: string | null;
  dateModified: string | null;
  datePublished: string | null;
};
