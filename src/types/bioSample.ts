import { DbXref, Distribution, Organism } from "@/types/api.ts";

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
  sameAs: DbXref[] | null;
  description: string | null;
  title: string | null;
  //--------------------------------
  // Same as bioSample but not in BaseDataSet
  dbXref: DbXref[] | null;
  organism: Organism | null;
  //--------------------------------
  // Unique to BioSample
  attributes: {
    attribute_name: string;
    display_name: string;
    harmonized_name: string;
    content: string;
  }[];
  model: unknown; // TODO: remove this
  Package: unknown; // TODO: remove this
};
