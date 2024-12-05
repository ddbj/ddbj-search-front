import { Xref, Distribution, Organism } from "@/types/api.ts";

export type BioSample = {
  //--------------------------------
  // Same as BaseDataSet
  type: "biosample";
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
  sameAs: Xref[] | null;
  description: string | null;
  title: string | null;
  //--------------------------------
  // Same as bioSample but not in BaseDataSet
  dbXref: Xref[] | null;
  organism: Organism | null;
  //--------------------------------
  // Unique to BioSample
  attributes: {
    attribute_name: string;
    display_name: string;
    harmonized_name: string;
    content: string;
  }[];
  model: {
    name: string;
  }[];
  package: {
    name: string;
    display_name: string;
  };
};
