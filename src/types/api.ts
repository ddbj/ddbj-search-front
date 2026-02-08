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
