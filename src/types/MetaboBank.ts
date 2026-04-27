import type {
  DbXrefsCount,
  Distribution,
  Organism,
  Organization,
  Publication,
  Xref,
} from "@/types/api.ts";

export type MetaboBank = {
  type: "metabobank";
  identifier: string;
  isPartOf: "metabobank";
  name: string | null;
  url: string;
  organism: Organism | null;
  title: string | null;
  description: string | null;
  organization: Organization[];
  publication: Publication[];
  studyType: string[];
  experimentType: string[];
  submissionType: string[];
  sameAs: Xref[];
  dbXrefs: Xref[];
  dbXrefsCount?: DbXrefsCount;
  distribution: Distribution[];
  properties: unknown;
  status: "public";
  accessibility: "public-access";
  dateCreated: string | null;
  dateModified: string | null;
  datePublished: string | null;
};
