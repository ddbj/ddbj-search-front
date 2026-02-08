import { ElasticSearchSource } from "@/types/api.ts";

export const jgaDac1: ElasticSearchSource = {
  identifier: "JGAC000001",
  organism: {
    identifier: "9606",
    name: "Homo sapiens",
  },
  accessibility: "public-access",
  dateModified: "2024-08-21T10:57:49+09:00",
  type: "jga-dac",
  isPartOf: "jga",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/search/resource/jga-dac/JGAC000001.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/search/resource/jga-dac/JGAC000001.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "JGAS000001",
      type: "jga-study",
      url: "https://ddbj.nig.ac.jp/search/resource/jga-study/JGAS000001",
    },
    {
      identifier: "JGAD000725",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/search/resource/jga-dataset/JGAD000725",
    },
    {
      identifier: "JGAD000726",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/search/resource/jga-dataset/JGAD000726",
    },
    {
      identifier: "JGAD000727",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/search/resource/jga-dataset/JGAD000727",
    },
    {
      identifier: "JGAD000728",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/search/resource/jga-dataset/JGAD000728",
    },
    {
      identifier: "JGAP000012",
      type: "jga-policy",
      url: "https://ddbj.nig.ac.jp/search/resource/jga-policy/JGAP000012",
    },
  ],
  sameAs: [],
  description: null,
  title: null,
  url: "https://ddbj.nig.ac.jp/search/resource/jga-dac/JGAC000001",
  datePublished: "2020-09-25T06:52:15+09:00",
  dateCreated: "2014-07-07T05:00:37+09:00",
  name: "JGAC000001",
  properties: {
    CONTACTS: {
      CONTACT: {
        name: "DBCLS",
        organisation: "DBCLS",
        email: "humandbs@dbcls.jp",
      },
    },
    center_name: "dbcls",
    alias: "JGAC000001",
    DAC_LINKS: {
      DAC_LINK: {
        URL_LINK: {
          LABEL: "Change in the operation and URL of NBDC Human Database",
          URL: "https://biosciencedbc.jp/en/news/20240401-03.html",
        },
      },
    },
    IDENTIFIERS: {
      SECONDARY_ID: "JGAC00000000001",
    },
    accession: "JGAC000001",
  },
  status: "live",
};
