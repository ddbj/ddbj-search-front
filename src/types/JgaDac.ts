import { __Organism, DbXref, Distribution } from "@/types/api.ts";

export type JgaDac = {
  type: "jga-dac";
  identifier: string;
  name: string | null;
  dateCreated: string;
  datePublished: string | null;
  dateModified: string;
  visibility: string;
  status: string;
  isPartOf: string;
  url: string;
  distribution: Distribution[];
  properties: unknown;
  //--------------------------------
  // not contained in BioSample and BioProject
  organism: __Organism | null;
  dbXrefs: DbXref[];
};
