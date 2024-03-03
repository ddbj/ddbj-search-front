// Elastic search types

import { BioProjectProperties } from "@/types/bioProject.ts";
import { BioSampleProperties } from "@/types/bioSample.ts";
import { SraStudyProperties } from "@/types/sraStudy.ts";

type ShardInfo = {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
};
type TotalHits = {
  value: number;
  relation: string;
};
type HitSource = {
  highlight?: any;
  search?: string;
  identifier: string;
  organism: Organism | null;
  visibility: string;
  downloadUrl: DownloadUrl[];
  description: string | null;
  dateModified: string;
  title: string;
  // type: hitType;
  isPartOf: string;
  distribution: Distribution[];
  dbXrefs: DbXref[] | null;
  url: string;
  datePublished: string | null;
  dateCreated: string;
  name: string | null;
  dbXrefsStatistics: DbXrefsStatistics[];
  // properties: Record<string, unknown>;
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
      properties: BioProjectProperties;
    }
  | {
      type: "sra-study";
      properties: SraStudyProperties;
    }
  | {
      type: "biosample";
      properties: BioSampleProperties;
    }
);

type Hit<T> = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _ignored?: string[];
  _source: T;
};
type Hits<T> = {
  total: TotalHits;
  max_score: number;
  hits: Hit<T>[];
};
type ElasticsearchSubResponse<T> = {
  took: number;
  timed_out: boolean;
  _shards: ShardInfo;
  hits: Hits<T>;
  status: number;
};
type MultiSearchResponse<T> = {
  took: number;
  responses: ElasticsearchSubResponse<T>[];
};
// Reuse types from the previous definition
type DownloadUrl = {
  name: string;
  ftpUrl: string;
  type: string;
  url: string;
};
type Organism = {
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
