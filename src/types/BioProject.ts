import { Xref, Distribution, Organism } from "@/types/api.ts";

export type BioProject = {
  //--------------------------------
  // Same as BaseDataSet
  type: "bioproject";
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
  sameAs: Xref[] | null;
  description: string | null;
  title: string | null;
  dbXrefs: Xref[] | null;
  //--------------------------------
  // Same as bioSample but not in BaseDataSet
  organism: Organism | null;
  //--------------------------------
  // Unique to BioProject
  objectType: "UmbrellaBioProject" | "BioProject";
  accession: string;
  organization: {
    abbreviation: string;
    name: string;
    organizationType: string;
    role: string;
    url: string;
  }[];
  publication: {
    date: string;
    Reference: string | null;
    id: string;
    title: string;
    url?: string | null;
    DbType: string;
    status: string;
  }[];
  externalLink: {
    label: string;
    url: string;
  }[];
  grant: {
    title?: string;
    id: string;
    agency: {
      abbreviation: string;
      name: string;
    }[];
  }[];
};
