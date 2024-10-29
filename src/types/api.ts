// Elastic search types

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
      sameAs: DbXref[] | null;
    }
  | {
      type: "biosample";
      description: string | null;
      title: string | null;
      organism: Organism;
      dbXref: DbXref[];
      dbXrefStatistics: DbXrefsStatistics[];
      properties: unknown;
      downloadUrl: unknown;
      sameAs: DbXref[] | null;
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
      organism: OldOrganism | null;
      downloadUrl: DownloadUrl[] | null;
      dbXrefs: DbXref[];
      dbXrefsStatistics: DbXrefsStatistics[];
      sameAs: DbXref[] | null;
    }
  | {
      type: "jga-dac";
      properties: unknown;
      organism: OldOrganism | null;
      dbXrefs: DbXref[];
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
