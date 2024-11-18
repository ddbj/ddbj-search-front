import { BioSample } from "@/types/bioSample.ts";

export const biosample1: BioSample = {
  identifier: "SAMN29827045",
  organism: {
    identifier: "9606",
    name: "Homo sapiens",
  },
  visibility: "unrestricted-access",
  description: "",
  dbXref: [],
  dateModified: "2023-06-15T02:00:46.693",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/search/entry/biosample/SAMN29827045.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
  ],
  isPartOf: "BioSample",
  type: "biosample",
  title: "BPH-1-M-E2",
  url: "https://ddbj.nig.ac.jp/search/entry/biosample/SAMN29827045",
  datePublished: "2023-06-15T00:00:00.000",
  dateCreated: "2022-07-19T10:14:07.997",
  name: "",
  attributes: [
    {
      attribute_name: "source_name",
      display_name: "source name",
      harmonized_name: "source_name",
      content: "ATCC cell line cells",
    },
    {
      attribute_name: "cell type",
      display_name: "cell type",
      harmonized_name: "cell_type",
      content: "ATCC cell line cells",
    },
    {
      attribute_name: "patient donor/cell_line",
      display_name: "",
      harmonized_name: "",
      content: "BPH-1",
    },
    {
      attribute_name: "genome build",
      display_name: "",
      harmonized_name: "",
      content: "hg19",
    },
    {
      attribute_name: "cpg coverage",
      display_name: "",
      harmonized_name: "",
      content: "6066008",
    },
    {
      attribute_name: "bisulfite conversion_rate",
      display_name: "",
      harmonized_name: "",
      content: "0.993717705",
    },
    {
      attribute_name: "qc",
      display_name: "",
      harmonized_name: "",
      content: "pass",
    },
  ],
  model: [
    {
      name: "Generic",
    },
  ],
  Package: {
    name: "Generic.1.0",
    display_name: "Generic",
  },
  properties: {
    Status: {
      when: "2023-06-15T00:40:25.483",
      status: "live",
    },
    Owner: {
      Contacts: {
        Contact: {
          Name: {
            Last: "Wittner",
            First: "Ben",
          },
        },
      },
      Name: {
        abbreviation: "Lawrence, Center for Cancer Research, Massachusetts General Hospital",
        content: "Lawrence, Center for Cancer Research, Massachusetts General Hospital",
      },
    },
    access: "public",
    Description: {
      Organism: {
        taxonomy_id: "9606",
        OrganismName: "Homo sapiens",
        taxonomy_name: "Homo sapiens",
      },
      Title: "BPH-1-M-E2",
    },
    Attributes: {
      Attribute: [
        {
          attribute_name: "source_name",
          display_name: "source name",
          harmonized_name: "source_name",
          content: "ATCC cell line cells",
        },
        {
          attribute_name: "cell type",
          display_name: "cell type",
          harmonized_name: "cell_type",
          content: "ATCC cell line cells",
        },
        {
          attribute_name: "patient donor/cell_line",
          content: "BPH-1",
        },
        {
          attribute_name: "genome build",
          content: "hg19",
        },
        {
          attribute_name: "cpg coverage",
          content: "6066008",
        },
        {
          attribute_name: "bisulfite conversion_rate",
          content: "0.993717705",
        },
        {
          attribute_name: "qc",
          content: "pass",
        },
      ],
    },
    accession: "SAMN29827045",
    submission_date: "2022-07-19T10:14:07.997",
    last_update: "2023-06-15T02:00:46.693",
    publication_date: "2023-06-15T00:00:00.000",
    Ids: {
      Id: [
        {
          is_primary: "1",
          db: "BioSample",
          content: "SAMN29827045",
        },
        {
          db: "SRA",
          content: "SRS13979220",
        },
        {
          db: "GEO",
          content: "GSM6347054",
        },
      ],
    },
    Links: {
      Link: [
        {
          label: "GEO Sample GSM6347054",
          type: "url",
          content: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM6347054",
        },
        {
          label: "PRJNA860307",
          type: "entrez",
          content: "860307",
          target: "bioproject",
        },
      ],
    },
    Models: {
      Model: [
        {
          content: "Generic",
        },
      ],
    },
    id: "29827045",
    Package: {
      display_name: "Generic",
      content: "Generic.1.0",
    },
  },
  sameAs: [
    {
      identifier: "SRS13979220",
      type: "sra-sample",
      url: "https://ddbj.nig.ac.jp/resource/sra-sample/SRS13979220",
    },
  ],
  status: "public",
};
