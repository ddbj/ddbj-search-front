import { ElasticSearchSource } from "@/types/api.ts";

export const sraRun1: ElasticSearchSource = {
  identifier: "SRR885622",
  organism: null,
  visibility: "controlled-access",
  downloadUrl: [
    {
      name: "SRA088679.run.xml",
      ftpUrl: "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/SRA088/SRA088679/SRA088679.run.xml",
      type: "meta",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/SRA088/SRA088679/SRA088679.run.xml",
    },
    {
      name: "SRR885622.sra",
      ftpUrl:
        "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/SRX/SRX296/SRX296737/SRR885622/SRR885622.sra",
      type: "sra",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/SRX/SRX296/SRX296737/SRR885622/SRR885622.sra",
    },
    {
      name: "SRR885622's fastq",
      ftpUrl: "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/SRA088/SRA088679/SRX296737",
      type: "fastq",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/SRA088/SRA088679/SRX296737",
    },
  ],
  description: null,
  dateModified: "2021-12-06T11:29:33Z",
  title: null,
  type: "sra-run",
  isPartOf: "sra",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-run/SRR885622.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-run/SRR885622.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "PRJNA206213",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA206213",
    },
    {
      identifier: "SAMN02185819",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02185819",
    },
    {
      identifier: "SRA088679",
      type: "sra-submission",
      url: "https://ddbj.nig.ac.jp/resource/sra-submission/SRA088679",
    },
    {
      identifier: "SRX296737",
      type: "sra-experiment",
      url: "https://ddbj.nig.ac.jp/resource/sra-experiment/SRX296737",
    },
    {
      identifier: "SRP023780",
      type: "sra-study",
      url: "https://ddbj.nig.ac.jp/resource/sra-study/SRP023780",
    },
    {
      identifier: "SRS437492",
      type: "sra-sample",
      url: "https://ddbj.nig.ac.jp/resource/sra-sample/SRS437492",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/sra-run/SRR885622",
  datePublished: "2014-07-04T04:32:28Z",
  dateCreated: "2013-06-06T01:17:08Z",
  name: "224302",
  dbXrefsStatistics: [
    {
      count: 1,
      type: "bioproject",
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
      type: "sra-sample",
    },
    {
      count: 1,
      type: "sra-experiment",
    },
  ],
  properties: {
    EXPERIMENT_REF: {
      refcenter: "WUGSC",
      IDENTIFIERS: {
        PRIMARY_ID: {
          content: "SRX296737",
        },
        SUBMITTER_ID: [
          {
            namespace: "WUGSC",
            content: "224292",
          },
        ],
      },
      accession: "SRX296737",
      refname: "224292",
    },
    center_name: "WUGSC",
    run_center: "WUGSC",
    alias: "224302",
    RUN_ATTRIBUTES: {
      RUN_ATTRIBUTE: [
        {
          TAG: "assembly",
          VALUE: "GRCh37-lite",
        },
      ],
    },
    IDENTIFIERS: {
      PRIMARY_ID: {
        content: "SRR885622",
      },
      SUBMITTER_ID: [
        {
          namespace: "WUGSC",
          content: "224302",
        },
      ],
      SECONDARY_ID: [
        {
          content: "SRZ048722",
        },
        {
          content: "SRR885624",
        },
        {
          content: "SRR885623",
        },
      ],
    },
    accession: "SRR885622",
  },
  sameAs: null,
  status: "public",
};
