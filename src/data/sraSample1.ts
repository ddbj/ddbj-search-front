import { ElasticSearchSource } from "@/types/api.ts";

export const sraSample1: ElasticSearchSource = {
  identifier: "ERS2785606",
  organism: {
    identifier: 1313,
    name: "Streptococcus pneumoniae",
  },
  visibility: "unrestricted-access",
  downloadUrl: [
    {
      name: "ERA2380438.sample.xml",
      ftpUrl:
        "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/ERA238/ERA2380438/ERA2380438.sample.xml",
      type: "meta",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/ERA238/ERA2380438/ERA2380438.sample.xml",
    },
  ],
  description: null,
  dateModified: "2021-09-27T14:01:30Z",
  title: "pneuDEEP7565425",
  type: "sra-sample",
  isPartOf: "sra",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-sample/ERS2785606.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-sample/ERS2785606.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "PRJEB22771",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJEB22771",
    },
    {
      identifier: "SAMEA4967388",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMEA4967388",
    },
    {
      identifier: "ERA2380438",
      type: "sra-submission",
      url: "https://ddbj.nig.ac.jp/resource/sra-submission/ERA2380438",
    },
    {
      identifier: "ERX3913644",
      type: "sra-experiment",
      url: "https://ddbj.nig.ac.jp/resource/sra-experiment/ERX3913644",
    },
    {
      identifier: "ERR3903591",
      type: "sra-run",
      url: "https://ddbj.nig.ac.jp/resource/sra-run/ERR3903591",
    },
    {
      identifier: "ERP104475",
      type: "sra-study",
      url: "https://ddbj.nig.ac.jp/resource/sra-study/ERP104475",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/sra-sample/ERS2785606",
  datePublished: "2020-02-15T02:48:42Z",
  dateCreated: "2020-02-14T02:09:50Z",
  name: "SAMEA4967388",
  dbXrefsStatistics: [
    {
      count: 1,
      type: "bioproject",
    },
    {
      count: 1,
      type: "sra-run",
    },
    {
      count: 1,
      type: "sra-submission",
    },
    {
      count: 1,
      type: "biosample",
    },
    {
      count: 1,
      type: "sra-study",
    },
    {
      count: 1,
      type: "sra-experiment",
    },
  ],
  properties: {
    SAMPLE_NAME: {
      TAXON_ID: 1313,
      SCIENTIFIC_NAME: "Streptococcus pneumoniae",
    },
    alias: "SAMEA4967388",
    IDENTIFIERS: {
      PRIMARY_ID: {
        content: "ERS2785606",
      },
      EXTERNAL_ID: [
        {
          namespace: "BioSample",
          content: "SAMEA4967388",
        },
      ],
    },
    TITLE: "pneuDEEP7565425",
    accession: "ERS2785606",
    SAMPLE_ATTRIBUTES: {
      SAMPLE_ATTRIBUTE: [
        {
          TAG: "ArrayExpress-SPECIES",
          VALUE: "Streptococcus pneumoniae",
        },
        {
          TAG: "ENA first public",
          VALUE: "2020-02-12",
        },
        {
          TAG: "ENA last update",
          VALUE: "2018-10-09",
        },
        {
          TAG: "External Id",
          VALUE: "SAMEA4967388",
        },
        {
          TAG: "INSDC center alias",
          VALUE: "SC",
        },
        {
          TAG: "INSDC center name",
          VALUE: "Wellcome Sanger Institute",
        },
        {
          TAG: "INSDC first public",
          VALUE: "2020-02-12T17:04:34Z",
        },
        {
          TAG: "INSDC last update",
          VALUE: "2018-10-09T16:37:40Z",
        },
        {
          TAG: "INSDC status",
          VALUE: "public",
        },
        {
          TAG: "Submitter Id",
          VALUE: "32d87eae-80f8-11e8-ac10-3c4a9275d6c8",
        },
        {
          TAG: "common name",
          VALUE: "Streptococcus pneumoniae",
        },
        {
          TAG: "sample name",
          VALUE: "32d87eae-80f8-11e8-ac10-3c4a9275d6c8",
        },
        {
          TAG: "subject id",
          VALUE: "09B13607",
        },
      ],
    },
  },
  sameAs: [
    {
      identifier: "SAMEA4967388",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMEA4967388",
    },
  ],
  status: "public",
};
