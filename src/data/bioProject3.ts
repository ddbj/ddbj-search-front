import { BioProject } from "@/types/bioProject.ts";

// check object type as whether it's UmbrellaBioProject
export const bioproject2: BioProject = {
  identifier: "PRJNA121",
  organism: null,
  visibility: "unrestricted-access",
  externalLink: [],
  description:
    "Barley mapping data is being maintained by GrainGenes. Currently twenty-five maps are available at NCBI.",
  dbXref: [
    {
      identifier: "PRJNA161111",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161111",
    },
    {
      identifier: "PRJNA161121",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161121",
    },
    {
      identifier: "PRJNA162961",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA162961",
    },
    {
      identifier: "PRJNA161155",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161155",
    },
    {
      identifier: "PRJNA161115",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161115",
    },
    {
      identifier: "PRJNA161125",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161125",
    },
    {
      identifier: "PRJNA161131",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161131",
    },
    {
      identifier: "PRJNA161147",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161147",
    },
    {
      identifier: "PRJNA161257",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161257",
    },
    {
      identifier: "PRJNA161135",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161135",
    },
    {
      identifier: "PRJNA161385",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161385",
    },
    {
      identifier: "PRJNA161163",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161163",
    },
    {
      identifier: "PRJNA161127",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161127",
    },
    {
      identifier: "PRJNA161129",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161129",
    },
    {
      identifier: "PRJNA161141",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161141",
    },
    {
      identifier: "PRJNA162963",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA162963",
    },
    {
      identifier: "PRJNA161137",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA161137",
    },
  ],
  dateModified: "2024-11-18T11:15:41Z",
  accession: "PRJNA121",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/search/entry/bioproject/PRJNA121.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
  ],
  isPartOf: "BioProject",
  type: "bioproject",
  title: "Barley genetic maps",
  url: "https://ddbj.nig.ac.jp/search/entry/bioproject/PRJNA121",
  objectType: "UmbrellaBioProject",
  datePublished: "2024-11-18T00:00:00Z",
  dateCreated: "2003-02-25",
  organization: [
    {
      organizationType: "center",
      role: "owner",
      name: "GrainGenes",
      abbreviation: "GrainGenes",
      url: "http://wheat.pw.usda.gov/index.shtml",
    },
  ],
  publication: [],
  name: "",
  grant: [],
  properties: {
    Project: {
      Project: {
        ProjectDescr: {
          Relevance: {
            Agricultural: "yes",
            Evolution: "yes",
          },
          Description:
            "Barley mapping data is being maintained by GrainGenes. Currently twenty-five maps are available at NCBI.",
          Title: "Barley genetic maps",
          Name: "Hordeum vulgare maps",
        },
        ProjectType: {
          ProjectTypeTopAdmin: {
            subtype: "eOther",
          },
        },
        ProjectID: {
          ArchiveID: {
            archive: "NCBI",
            accession: "PRJNA121",
            id: "121",
          },
        },
      },
      Submission: {
        submitted: "2003-02-25",
        Description: {
          Organization: {
            role: "owner",
            type: "center",
            url: "http://wheat.pw.usda.gov/index.shtml",
            Name: {
              abbr: "GrainGenes",
              content: "GrainGenes",
            },
          },
          Access: "public",
        },
      },
      ProjectLinks: {
        Link: [
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161111",
              accession: "PRJNA161111",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161115",
              accession: "PRJNA161115",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161121",
              accession: "PRJNA161121",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161125",
              accession: "PRJNA161125",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161127",
              accession: "PRJNA161127",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161129",
              accession: "PRJNA161129",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161131",
              accession: "PRJNA161131",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161135",
              accession: "PRJNA161135",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161137",
              accession: "PRJNA161137",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161141",
              accession: "PRJNA161141",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161147",
              accession: "PRJNA161147",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161155",
              accession: "PRJNA161155",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161163",
              accession: "PRJNA161163",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161257",
              accession: "PRJNA161257",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "161385",
              accession: "PRJNA161385",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "162961",
              accession: "PRJNA162961",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
          {
            ProjectIDRef: {
              archive: "NCBI",
              id: "162963",
              accession: "PRJNA162963",
            },
            Hierarchical: {
              MemberID: {
                archive: "NCBI",
                id: "121",
                accession: "PRJNA121",
              },
              type: "TopAdmin",
            },
          },
        ],
      },
    },
  },
  sameAs: [],
  status: "public",
};
