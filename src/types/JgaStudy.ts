import { Organism, Xref, Distribution } from "@/types/api.ts";

export type JgaStudy = {
  type: "jga-study";
  identifier: string;
  name: string | null;
  dateCreated: string;
  datePublished: string | null;
  dateModified: string;
  accessibility: string;
  status: string;
  isPartOf: string;
  url: string;
  distribution: Distribution[];
  properties: unknown;
  dbXrefs: Xref[];
  sameAs: Xref[] | null;
  description: string | null;
  title: string | null;
  organism: Organism | null;
};
