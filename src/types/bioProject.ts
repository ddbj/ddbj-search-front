import { DbXref, Distribution, Organism } from "@/types/api.ts";

export type BioProject = {
  //--------------------------------
  // Same as BaseDataSet
  type: "bioproject";
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
    };
  }[];
};
