// Elastic search types

import { BaseDataSet } from "@/types/BaseDataSet.ts";
import { BioProject } from "@/types/BioProject.ts";
import { BioSample } from "@/types/BioSample.ts";
import { JgaDac } from "@/types/JgaDac.ts";

export type MultiSearchElasticsearchResponse = MultiSearchResponse<HitSource>;
export type SingleSearchElasticsearchResponse = SingleSearchResponse<HitSource>;
export type ElasticSearchSource = HitSource;

type HitSource = JgaDac | BaseDataSet | BioSample | BioProject;

type MultiSearchResponse<T> = {
  took: number;
  responses: {
    took: number;
    timed_out: boolean;
    _shards: {
      total: number;
      successful: number;
      skipped: number;
      failed: number;
    };
    hits: {
      total: {
        value: number;
        relation: string;
      };
      max_score: number;
      hits: {
        _index: string;
        _type: string;
        _id: string;
        _score: number;
        _ignored?: string[];
        _source: T;
      }[];
    };
    status: number;
  }[];
};

type SingleSearchResponse<T> = {
  _source: T;
};

export type Organism = {
  identifier: string;
  name: string | null;
};
export type Distribution = {
  contentUrl: string;
  encodingFormat: string;
  type: string;
};
export type Xref = {
  identifier: string;
  type: string;
  url: string;
};
export type DownloadUrl = {
  name: string;
  ftpUrl: string;
  type: string;
  url: string;
};

/**
 * @deprecated
 */
type _HitSource = {
  identifier: string;
  visibility: string;
  dateModified: string;
  isPartOf: string;
  distribution: Distribution[];
  url: string;
  datePublished: string | null;
  dateCreated: string;
  name: string | null;
  status: string;
} & (
  | {
      type: "bioproject";
      objectType: "UmbrellaBioProject" | "BioProject";
      description: string | null;
      title: string | null;
      accession: string;
      dbXref: Xref[] | null;
      organism: Organism;
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
      properties: unknown;
      download: unknown;
      sameAs: Xref[] | null;
    }
  | {
      type: "biosample";
      description: string | null;
      title: string | null;
      organism: Organism;
      dbXref: Xref[];
      properties: unknown;
      // downloadUrl: unknown;
      sameAs: Xref[] | null;
      attributes: any[];
      model: any;
      Package: any;
    }
  | {
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
      description: string | null;
      title: string | null;
      properties: unknown;
      organism: __Organism | null;
      downloadUrl: DownloadUrl[] | null;
      dbXref: Xref[];
      dbXrefsStatistics: __DbXrefsStatistics[];
      sameAs: Xref[] | null;
    }
  | {
      type: "jga-dac";
      properties: unknown;
      organism: __Organism | null;
      dbXref: Xref[];
    }
);
/**
 * @deprecated
 */
export type __Organism = {
  identifier: number;
  name: string | null;
};
/**
 * @deprecated
 */
export type __DbXrefsStatistics = {
  count: number;
  type: string;
};
