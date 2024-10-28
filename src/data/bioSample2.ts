import { ElasticSearchSource } from "@/types/api.ts";

export const biosample2: ElasticSearchSource = {
  identifier: "SAMN33271208",
  organism: {
    identifier: "749906",
    name: "gut metagenome",
  },
  visibility: "unrestricted-access",
  description: "Keywords: GSC:MIxS;MIMARKS:6.0",
  title: "laboriosa1",
  type: "biosample",
  isPartOf: "biosample",
  dateModified: "2023-02-14T02:16:02.387",
  datePublished: "2023-02-13T00:00:00.000",
  dateCreated: "2023-02-13T12:08:05.597",
  properties: {
    Status: {
      when: "2023-02-13T12:08:05.596",
      status: "live",
    },
    Owner: {
      Contacts: {
        Contact: {
          Name: {
            Last: "Holley",
            First: "Jo-anne",
            Middle: "C",
          },
        },
      },
      Name: {
        abbreviation: "University of Texas at Austin",
        content: "University of Texas at Austin",
      },
    },
    access: "public",
    Description: {
      Comment: {
        Paragraph: "Keywords: GSC:MIxS;MIMARKS:6.0",
      },
      Organism: {
        taxonomy_id: "749906",
        OrganismName: "gut metagenome",
        taxonomy_name: "gut metagenome",
      },
      Title: "laboriosa1",
    },
    Attributes: {
      Attribute: [
        {
          attribute_name: "collection_date",
          display_name: "collection date",
          harmonized_name: "collection_date",
          content: "2019-03-25",
        },
        {
          attribute_name: "env_broad_scale",
          display_name: "broad-scale environmental context",
          harmonized_name: "env_broad_scale",
          content: "not collected",
        },
        {
          attribute_name: "env_local_scale",
          display_name: "local-scale environmental context",
          harmonized_name: "env_local_scale",
          content: "flower",
        },
        {
          attribute_name: "env_medium",
          display_name: "environmental medium",
          harmonized_name: "env_medium",
          content: "bee gut",
        },
        {
          attribute_name: "geo_loc_name",
          display_name: "geographic location",
          harmonized_name: "geo_loc_name",
          content: "USA: TX, Cleveland",
        },
        {
          attribute_name: "host",
          display_name: "host",
          harmonized_name: "host",
          content: "Habropoda laboriosa",
        },
        {
          attribute_name: "lat_lon",
          display_name: "latitude and longitude",
          harmonized_name: "lat_lon",
          content: "30.341 N 95.086 W",
        },
        {
          attribute_name: "replicate",
          content: "replicate = biological replicate 1",
        },
        {
          attribute_name: "region",
          content: "16S rRNA V4",
        },
        {
          attribute_name: "primer pair",
          content: "515F (GTGCCAGCMGCCGCGGTAA) - 806R (GGACTACHVHHHTWTCTAAT)",
        },
      ],
    },
    accession: "SAMN33271208",
    submission_date: "2023-02-13T12:08:05.597",
    last_update: "2023-02-14T02:16:02.387",
    publication_date: "2023-02-13T00:00:00.000",
    Ids: {
      Id: [
        {
          is_primary: "1",
          db: "BioSample",
          content: "SAMN33271208",
        },
        {
          db_label: "Sample name",
          content: "MNJ074",
        },
        {
          db: "SRA",
          content: "SRS16750571",
        },
      ],
    },
    Links: {
      Link: {
        label: "PRJNA798723",
        type: "entrez",
        content: "798723",
        target: "bioproject",
      },
    },
    Models: {
      Model: [
        {
          content: "MIMARKS.survey",
        },
        {
          content: "MIGS/MIMS/MIMARKS.host-associated",
        },
      ],
    },
    id: "33271208",
    Package: {
      display_name: "MIMARKS: survey, host-associated; version 6.0",
      content: "MIMARKS.survey.host-associated.6.0",
    },
  },
  status: "public",
  //
  dbXref: [],
  dbXrefStatistics: [],
  //
  url: "",
  name: "",
  sameAs: null,
  downloadUrl: [],
  distribution: [],
};
