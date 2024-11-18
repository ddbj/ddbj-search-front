import { __DbXrefsStatistics, __Organism, DbXref, Distribution, DownloadUrl } from "@/types/api.ts";

export type BaseDataSet = {
  type:
    | "sra-study"
    | "sra-sample"
    | "sra-run"
    | "sra-submission"
    | "sra-analysis"
    | "sra-experiment"
    | "jga-dataset"
    | "jga-study"
    | "jga-policy";
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
  // not contained in JgaDac but in BioSample and BioProject
  sameAs: DbXref[] | null;
  description: string | null;
  title: string | null;
  //--------------------------------
  // Unique to BaseDataSet
  downloadUrl: DownloadUrl[] | null;
  //--------------------------------
  // not contained in BioSample and BioProject
  organism: __Organism | null;
  dbXrefs: DbXref[];
  dbXrefsStatistics: __DbXrefsStatistics[];
};
