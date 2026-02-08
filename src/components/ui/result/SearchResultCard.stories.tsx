import { Meta, StoryObj } from "@storybook/react";
import { SearchResultCard } from "./SearchResultCard";

const meta: Meta<typeof SearchResultCard> = {
  component: SearchResultCard,
};
export default meta;

type Story = StoryObj<typeof SearchResultCard>;
export const Primary: Story = {
  args: {
    item: {
      identifier: "SAMN04070198",
      organism: {
        identifier: "9606",
        name: null,
      },
      accessibility: "controlled-access",
      description: null,
      dateModified: "2019-07-04T01:38:58Z",
      title:
        'Non-tumor DNA sample from blood of a human female participant in the dbGaP study "Type 1 Diabetes Genetics Consortium (T1DGC): ImmunoChip Study"',
      type: "biosample",
      isPartOf: "biosample",
      distribution: [
        {
          contentUrl: "https://ddbj.nig.ac.jp/resource/biosample/SAMN04070198.json",
          encodingFormat: "JSON",
          type: "DataDownload",
        },
        {
          contentUrl: "https://ddbj.nig.ac.jp/resource/biosample/SAMN04070198.jsonld",
          encodingFormat: "JSON-LD",
          type: "DataDownload",
        },
      ],
      attributes: [],
      dbXrefs: [],
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN04070198",
      datePublished: "2015-09-12T04:12:48Z",
      dateCreated: "2015-09-12T04:12:48Z",
      name: null,
      properties: {
        Status: {
          when: "2019-07-03T21:31:55",
          status: "live",
        },
        submission_date: "2015-09-12T04:12:48.617Z",
        Owner: {
          Name: [
            {
              abbreviation: "NCBI",
            },
          ],
        },
        access: "controlled-access",
        Description: {
          Organism: [
            {
              taxonomy_id: 9606,
            },
          ],
          Title:
            'Non-tumor DNA sample from blood of a human female participant in the dbGaP study "Type 1 Diabetes Genetics Consortium (T1DGC): ImmunoChip Study"',
        },
        last_update: "2019-07-04T01:38:58.45Z",
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
              content: "44564102",
            },
            {
              attribute_name: "submitted sample id",
              display_name: "submitted sample id",
              harmonized_name: "submitted_sample_id",
              content: "44564102",
            },
            {
              attribute_name: "submitted subject id",
              display_name: "submitted subject id",
              harmonized_name: "submitted_subject_id",
              content: "44564102",
            },
            {
              attribute_name: "gap_sample_id",
              display_name: "gap sample id",
              harmonized_name: "gap_sample_id",
              content: "1757709",
            },
            {
              attribute_name: "gap_subject_id",
              display_name: "gap subject id",
              harmonized_name: "gap_subject_id",
              content: "1345869",
            },
            {
              attribute_name: "sex",
              display_name: "sex",
              harmonized_name: "sex",
              content: "female",
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
        publication_date: "2015-09-12T04:12:48.617Z",
        Ids: {
          Id: [
            {
              is_primary: "1",
              db: "BioSample",
              content: "SAMN04070198",
            },
            {
              db_label: "Sample name",
              is_hidden: "1",
              db: "dbGaP",
              content: "911-44564102",
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
        accession: "SAMN04070198",
        Package: {
          display_name: "Generic",
          content: "Generic.1.0",
        },
      },
      sameAs: null,
      status: "live",
      package: {
        display_name: "Generic",
        name: "Generic",
      },
      model: [{ name: "Generic" }],
    },
  },
};
