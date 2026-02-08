import { ElasticSearchSource } from "@/types/api.ts";

export const sraSubmission: ElasticSearchSource = {
  identifier: "SRA174011",
  organism: null,
  accessibility: "public-access",
  description: null,
  dateModified: "2022-07-02T15:14:43Z",
  title: null,
  type: "sra-submission",
  isPartOf: "sra",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-submission/SRA174011.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-submission/SRA174011.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "PRJNA230968",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA230968",
    },
    {
      identifier: "SAMN02628689",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02628689",
    },
    {
      identifier: "SRX644919",
      type: "sra-experiment",
      url: "https://ddbj.nig.ac.jp/resource/sra-experiment/SRX644919",
    },
    {
      identifier: "SRR1505384",
      type: "sra-run",
      url: "https://ddbj.nig.ac.jp/resource/sra-run/SRR1505384",
    },
    {
      identifier: "SRP038995",
      type: "sra-study",
      url: "https://ddbj.nig.ac.jp/resource/sra-study/SRP038995",
    },
    {
      identifier: "SRS653106",
      type: "sra-sample",
      url: "https://ddbj.nig.ac.jp/resource/sra-sample/SRS653106",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/sra-submission/SRA174011",
  datePublished: "2014-07-02T22:19:07Z",
  dateCreated: "2014-07-02T22:19:07Z",
  name: "CFSAN008502_01",
  properties: {
    center_name: "CFSAN",
    alias: "CFSAN008502_01",
    lab_name: "",
    accession: "SRA174011",
    submission_comment: "GenomeTrakr pathogen sampling project",
  },
  sameAs: null,
  status: "live",
};
