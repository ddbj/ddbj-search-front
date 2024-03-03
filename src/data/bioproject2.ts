import { ElasticSearchSource } from "@/types/api.ts";

export const bioproject2: ElasticSearchSource = {
  identifier: "PRJNA167909",
  organism: null,
  visibility: "unrestricted-access",
  downloadUrl: [
    {
      name: "bioproject.xml",
      ftpUrl: "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/bioproject/bioproject.xml",
      type: "meta",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/bioproject/bioproject.xml",
    },
  ],
  description: null,
  dateModified: "2012-06-04T00:00:00Z",
  title: "NHGRI Unassigned",
  type: "bioproject",
  isPartOf: "bioproject",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA167909.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA167909.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [],
  url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA167909",
  datePublished: null,
  dateCreated: "2012-06-04T00:00:00Z",
  name: null,
  dbXrefsStatistics: [],
  properties: {
    Project: {
      Project: {
        ProjectDescr: {
          Relevance: {
            Other: "yes",
          },
          Title: "NHGRI Unassigned",
        },
        ProjectType: {
          ProjectTypeTopAdmin: {
            subtype: "eFundingInitiative",
          },
        },
        ProjectID: {
          ArchiveID: [
            {
              archive: "NCBI",
              accession: "PRJNA167909",
              id: "167909",
            },
          ],
        },
      },
      Submission: {
        submitted: "2012-06-04",
        Description: {
          Organization: [
            {
              role: "owner",
              type: "institute",
              Name: {
                content: "NHGRI",
              },
            },
          ],
          Access: "public",
        },
        last_update: "2012-06-04",
      },
    },
  },
  sameAs: null,
  status: "public",
};
