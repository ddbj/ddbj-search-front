// Elastic search types

import { SraExperimentProperties } from "@/types/sraExperiment.ts";
import { SraSampleProperties } from "@/types/sraSample.ts";
import { SraStudyProperties } from "@/types/sraStudy.ts";

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

type HitSource = {
  highlight?: any;
  search?: string;
  identifier: string;
  visibility: string;
  description: string | null;
  dateModified: string;
  title: string;
  isPartOf: string;
  distribution: Distribution[];
  url: string;
  datePublished: string | null;
  dateCreated: string;
  name: string | null;
  sameAs: DbXref[] | null;
  status: string;
  _index?: string;
  _type?: string;
  _id?: string;
  _score?: number;
  _ignored?: string[];
  _click_id?: number;
} & (
  | {
      type: "bioproject";
      objectType: "UmbrellaBioProject" | "BioProject";
      accession: string;
      dbXref: DbXref[] | null;
      dbXrefStatistics: DbXrefsStatistics[];
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
    }
  | {
      type: "biosample";
      organism: Organism;
      dbXref: DbXref[];
      dbXrefStatistics: DbXrefsStatistics[];
      properties: unknown;
      downloadUrl: unknown;
    }
  | {
      type: "sra-study";
      properties: SraStudyProperties;
      organism: OldOrganism | null;
      downloadUrl: DownloadUrl[];
      dbXrefs: DbXref[];
      dbXrefsStatistics: DbXrefsStatistics[];
    }
  | {
      type: "sra-sample";
      properties: SraSampleProperties;
      organism: OldOrganism | null;
      downloadUrl: DownloadUrl[];
      dbXrefs: DbXref[];
      dbXrefsStatistics: DbXrefsStatistics[];
    }
  | {
      type: "sra-experiment";
      properties: SraExperimentProperties;
      organism: OldOrganism | null;
      downloadUrl: DownloadUrl[];
      dbXrefs: DbXref[];
      dbXrefsStatistics: DbXrefsStatistics[];
    }
);

// Reuse types from the previous definition
type DownloadUrl = {
  name: string;
  ftpUrl: string;
  type: string;
  url: string;
};
type Organism = {
  identifier: string;
  name: string | null;
};
/**
 * @deprecated
 */
type OldOrganism = {
  identifier: number;
  name: string | null;
};
type Distribution = {
  contentUrl: string;
  encodingFormat: string;
  type: string;
};
type DbXref = {
  identifier: string;
  type: string;
  url: string;
};
type DbXrefsStatistics = {
  count: number;
  type: string;
};

// Example of using the type for a specific source structure
export type MultiSearchElasticsearchResponse = MultiSearchResponse<HitSource>;
export type ElasticSearchSource = HitSource;
