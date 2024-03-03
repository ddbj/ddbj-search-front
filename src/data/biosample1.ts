import { ElasticSearchSource } from "@/types/api.ts";

export const biosample1: ElasticSearchSource = {
  identifier: "SAMN04070251",
  title:
    'Non-tumor DNA sample from blood of a human male participant in the dbGaP study "Type 1 Diabetes Genetics Consortium (T1DGC): ImmunoChip Study"',
  description: null,
  name: null,
  type: "biosample",
  url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN04070251",
  sameAs: null,
  isPartOf: "biosample",
  organism: {
    name: null,
    identifier: 9606,
  },
  dbXrefs: [],
  dbXrefsStatistics: [],
  properties: {
    access: "controlled-access",
    publication_date: "2015-09-12T04:12:53.38Z",
    last_update: "2019-07-04T00:58:49.127Z",
    submission_date: "2015-09-12T04:12:53.38Z",
    accession: "SAMN04070251",
    Ids: {
      Id: [
        {
          is_primary: "1",
          db: "BioSample",
          content: "SAMN04070251",
        },
        {
          db: "dbGaP",
          db_label: "Sample name",
          is_hidden: "1",
          content: "911-22782801",
        },
      ],
    },
    Status: {
      when: "2019-07-03T21:31:55",
      status: "live",
    },
    Description: {
      Title:
        'Non-tumor DNA sample from blood of a human male participant in the dbGaP study "Type 1 Diabetes Genetics Consortium (T1DGC): ImmunoChip Study"',
      Organism: [
        {
          taxonomy_id: 9606,
        },
      ],
    },
    Owner: {
      Name: [
        {
          abbreviation: "NCBI",
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
    Attributes: {
      Attribute: [
        {
          attribute_name: "gap_accession",
          display_name: "gap accession",
          harmonized_name: "gap_accession",
          content: "phs000911",
        },
        {
          attribute_name: "submitter handle",
          display_name: "submitter handle",
          harmonized_name: "submitter_handle",
          content: "NIDDK_T1DGC_ImmunoChip",
        },
        {
          attribute_name: "biospecimen repository",
          display_name: "biospecimen repository",
          harmonized_name: "biospecimen_repository",
          content: "NIDDK_T1DGC_ImmunoChip",
        },
        {
          attribute_name: "study name",
          display_name: "study name",
          harmonized_name: "study_name",
          content: "Type 1 Diabetes Genetics Consortium (T1DGC): ImmunoChip Study",
        },
        {
          attribute_name: "study design",
          display_name: "study design",
          harmonized_name: "study_design",
          content: "Case-Control",
        },
        {
          attribute_name: "biospecimen repository sample id",
          display_name: "biospecimen repository sample id",
          harmonized_name: "biospecimen_repository_sample_id",
          content: "22782801",
        },
        {
          attribute_name: "submitted sample id",
          display_name: "submitted sample id",
          harmonized_name: "submitted_sample_id",
          content: "22782801",
        },
        {
          attribute_name: "submitted subject id",
          display_name: "submitted subject id",
          harmonized_name: "submitted_subject_id",
          content: "22782801",
        },
        {
          attribute_name: "gap_sample_id",
          display_name: "gap sample id",
          harmonized_name: "gap_sample_id",
          content: "1752160",
        },
        {
          attribute_name: "gap_subject_id",
          display_name: "gap subject id",
          harmonized_name: "gap_subject_id",
          content: "1222424",
        },
        {
          attribute_name: "sex",
          display_name: "sex",
          harmonized_name: "sex",
          content: "male",
        },
        {
          attribute_name: "body site",
          display_name: "tissue",
          harmonized_name: "tissue",
          content: "blood",
        },
        {
          attribute_name: "histological type",
          display_name: "histological type",
          harmonized_name: "histological_type",
          content: "not available",
        },
        {
          attribute_name: "analyte type",
          display_name: "analyte type",
          harmonized_name: "analyte_type",
          content: "DNA",
        },
        {
          attribute_name: "is tumor",
          display_name: "is tumor",
          harmonized_name: "is_tumor",
          content: "No",
        },
        {
          attribute_name: "subject is affected",
          display_name: "subject is affected",
          harmonized_name: "subject_is_affected",
          content: "No",
        },
        {
          attribute_name: "molecular data type",
          display_name: "molecular data type",
          harmonized_name: "molecular_data_type",
          content: "SNP Genotypes (Array)",
        },
        {
          attribute_name: "gap_consent_code",
          display_name: "gap consent code",
          harmonized_name: "gap_consent_code",
          content: "1",
        },
        {
          attribute_name: "gap_consent_short_name",
          display_name: "gap consent short name",
          harmonized_name: "gap_consent_short_name",
          content: "DS-T1DR-IRB-RD",
        },
      ],
    },
    Package: {
      display_name: "Generic",
      content: "Generic.1.0",
    },
  },
  search:
    '{\n  "access" : "controlled-access",\n  "publication_date" : "2015-09-12T04:12:53.38Z",\n  "last_update" : "2019-07-04T00:58:49.127Z",\n  "submission_date" : "2015-09-12T04:12:53.38Z",\n  "accession" : "SAMN04070251",\n  "Ids" : {\n    "Id" : [ {\n      "is_primary" : "1",\n      "db" : "BioSample",\n      "content" : "SAMN04070251"\n    }, {\n      "db" : "dbGaP",\n      "db_label" : "Sample name",\n      "is_hidden" : "1",\n      "content" : "911-22782801"\n    } ]\n  },\n  "Status" : {\n    "when" : "2019-07-03T21:31:55",\n    "status" : "live"\n  },\n  "Description" : {\n    "Title" : "Non-tumor DNA sample from blood of a human male participant in the dbGaP study \\"Type1DiabetesGeneticsConsortium(T1DGC): ImmunoChipStudy\\"",\n    "Organism" : [ {\n      "taxonomy_id" : 9606\n    } ]\n  },\n  "Owner" : {\n    "Name" : [ {\n      "abbreviation" : "NCBI"\n    } ]\n  },\n  "Models" : {\n    "Model" : [ {\n      "content" : "Generic"\n    } ]\n  },\n  "Attributes" : {\n    "Attribute" : [ {\n      "attribute_name" : "gap_accession",\n      "display_name" : "gap accession",\n      "harmonized_name" : "gap_accession",\n      "content" : "phs000911"\n    }, {\n      "attribute_name" : "submitter handle",\n      "display_name" : "submitter handle",\n      "harmonized_name" : "submitter_handle",\n      "content" : "NIDDK_T1DGC_ImmunoChip"\n    }, {\n      "attribute_name" : "biospecimen repository",\n      "display_name" : "biospecimen repository",\n      "harmonized_name" : "biospecimen_repository",\n      "content" : "NIDDK_T1DGC_ImmunoChip"\n    }, {\n      "attribute_name" : "study name",\n      "display_name" : "study name",\n      "harmonized_name" : "study_name",\n      "content" : "Type 1 Diabetes Genetics Consortium (T1DGC): ImmunoChip Study"\n    }, {\n      "attribute_name" : "study design",\n      "display_name" : "study design",\n      "harmonized_name" : "study_design",\n      "content" : "Case-Control"\n    }, {\n      "attribute_name" : "biospecimen repository sample id",\n      "display_name" : "biospecimen repository sample id",\n      "harmonized_name" : "biospecimen_repository_sample_id",\n      "content" : "22782801"\n    }, {\n      "attribute_name" : "submitted sample id",\n      "display_name" : "submitted sample id",\n      "harmonized_name" : "submitted_sample_id",\n      "content" : "22782801"\n    }, {\n      "attribute_name" : "submitted subject id",\n      "display_name" : "submitted subject id",\n      "harmonized_name" : "submitted_subject_id",\n      "content" : "22782801"\n    }, {\n      "attribute_name" : "gap_sample_id",\n      "display_name" : "gap sample id",\n      "harmonized_name" : "gap_sample_id",\n      "content" : "1752160"\n    }, {\n      "attribute_name" : "gap_subject_id",\n      "display_name" : "gap subject id",\n      "harmonized_name" : "gap_subject_id",\n      "content" : "1222424"\n    }, {\n      "attribute_name" : "sex",\n      "display_name" : "sex",\n      "harmonized_name" : "sex",\n      "content" : "male"\n    }, {\n      "attribute_name" : "body site",\n      "display_name" : "tissue",\n      "harmonized_name" : "tissue",\n      "content" : "blood"\n    }, {\n      "attribute_name" : "histological type",\n      "display_name" : "histological type",\n      "harmonized_name" : "histological_type",\n      "content" : "not available"\n    }, {\n      "attribute_name" : "analyte type",\n      "display_name" : "analyte type",\n      "harmonized_name" : "analyte_type",\n      "content" : "DNA"\n    }, {\n      "attribute_name" : "is tumor",\n      "display_name" : "is tumor",\n      "harmonized_name" : "is_tumor",\n      "content" : "No"\n    }, {\n      "attribute_name" : "subject is affected",\n      "display_name" : "subject is affected",\n      "harmonized_name" : "subject_is_affected",\n      "content" : "No"\n    }, {\n      "attribute_name" : "molecular data type",\n      "display_name" : "molecular data type",\n      "harmonized_name" : "molecular_data_type",\n      "content" : "SNP Genotypes (Array)"\n    }, {\n      "attribute_name" : "gap_consent_code",\n      "display_name" : "gap consent code",\n      "harmonized_name" : "gap_consent_code",\n      "content" : "1"\n    }, {\n      "attribute_name" : "gap_consent_short_name",\n      "display_name" : "gap consent short name",\n      "harmonized_name" : "gap_consent_short_name",\n      "content" : "DS-T1DR-IRB-RD"\n    } ]\n  },\n  "Package" : {\n    "display_name" : "Generic",\n    "content" : "Generic.1.0"\n  }\n}',
  distribution: [
    {
      type: "DataDownload",
      encodingFormat: "JSON",
      contentUrl: "https://ddbj.nig.ac.jp/resource/biosample/SAMN04070251.json",
    },
    {
      type: "DataDownload",
      encodingFormat: "JSON-LD",
      contentUrl: "https://ddbj.nig.ac.jp/resource/biosample/SAMN04070251.jsonld",
    },
  ],
  downloadUrl: [
    {
      type: "meta",
      name: "biosample_set.xml.gz",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/biosample/biosample_set.xml.gz",
      ftpUrl: "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/biosample/biosample_set.xml.gz",
    },
  ],
  status: "public",
  visibility: "controlled-access",
  dateCreated: "2015-09-12T04:12:53Z",
  dateModified: "2019-07-04T00:58:49Z",
  datePublished: "2015-09-12T04:12:53Z",
};
