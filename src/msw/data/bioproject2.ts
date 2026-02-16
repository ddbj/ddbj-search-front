import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";

export const bioproject2: BioProjectDetailResponse = {
  identifier: "PRJNA313191",
  properties: {
    Project: {
      Project: {
        ProjectID: {
          ArchiveID: { accession: "PRJNA313191", archive: "NCBI", id: "313191" },
          LocalID: [{ content: "bp0" }, { content: "bp0" }],
        },
        ProjectDescr: {
          Name: "soil metagenome",
          Title: "EarlhamMetagenomics2013",
          Description: "NSF TUES grant for research and bioinformatics in the classroom",
          Grant: { GrantId: "1139893", Agency: { abbr: "NSF", content: "NSF" } },
          Relevance: { Agricultural: "yes" },
        },
        ProjectType: {
          ProjectTypeSubmission: {
            Target: {
              capture: "eWhole",
              material: "eGenome",
              sample_scope: "eEnvironment",
              Organism: {
                species: "410658",
                taxID: "410658",
                OrganismName: "soil metagenome",
                Supergroup: "eOther",
                BiologicalProperties: { Environment: { OptimumTemperature: "C" } },
              },
              Description: "Agricultural soil samples from Till vs. No-Till farm fields.",
            },
            Method: { method_type: "eSequencing" },
            Objectives: { Data: { data_type: "eRawSequenceReads" } },
            IntendedDataTypeSet: {
              DataType: ["raw sequence reads", "metagenome", "targeted loci environmental"],
            },
            ProjectDataTypeSet: { DataType: "raw sequence reads" },
          },
        },
      },
      Submission: {
        last_update: "2016-02-25",
        submission_id: "SUB1354820",
        submitted: "2016-02-25",
        Description: {
          Organization: {
            role: "owner",
            type: "institute",
            url: "https://www.earlham.edu/",
            Name: { content: "Earlham College" },
            Contact: {
              email: "kmmuterspaw@gmail.com",
              Address: {
                Street: "801 National Road West",
                City: "Richmond",
                Sub: "IN",
                Country: "United States of America",
              },
              Name: { First: "Kristin", Last: "Muterspaw", Middle: "Michelle" },
            },
          },
          Access: "public",
        },
      },
    },
  },
  distribution: [
    {
      type: "DataDownload",
      encodingFormat: "JSON",
      contentUrl: "https://ddbj-staging.nig.ac.jp/search/entry/bioproject/PRJNA313191.json",
    },
  ],
  isPartOf: "BioProject",
  type: "bioproject",
  objectType: "BioProject",
  name: null,
  url: "https://ddbj-staging.nig.ac.jp/search/entry/bioproject/PRJNA313191",
  organism: { identifier: "410658", name: "soil metagenome" },
  title: "EarlhamMetagenomics2013",
  description: "NSF TUES grant for research and bioinformatics in the classroom",
  organization: [
    {
      name: "Earlham College",
      organizationType: "institute",
      role: "owner",
      url: "https://www.earlham.edu/",
      abbreviation: null,
    },
  ],
  publication: [],
  grant: [{ id: "1139893", title: null, agency: [{ abbreviation: "NSF", name: "NSF" }] }],
  externalLink: [],
  sameAs: [],
  status: "live",
  accessibility: "public-access",
  dateCreated: "2016-02-25",
  dateModified: "2016-02-25",
  datePublished: null,
  dbXrefs: [
    {
      identifier: "SAMN04516584",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516584",
    },
    {
      identifier: "SAMN04516585",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516585",
    },
    {
      identifier: "SAMN04516586",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516586",
    },
    {
      identifier: "SAMN04516587",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516587",
    },
    {
      identifier: "SAMN04516588",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516588",
    },
    {
      identifier: "SAMN04516589",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516589",
    },
    {
      identifier: "SAMN04516590",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516590",
    },
    {
      identifier: "SAMN04516591",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516591",
    },
    {
      identifier: "SAMN04516592",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516592",
    },
    {
      identifier: "SAMN04516593",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516593",
    },
    {
      identifier: "SAMN04516594",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516594",
    },
    {
      identifier: "SAMN04516595",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516595",
    },
    {
      identifier: "SAMN04516596",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516596",
    },
    {
      identifier: "SAMN04516597",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516597",
    },
    {
      identifier: "SAMN04516598",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516598",
    },
    {
      identifier: "SAMN04516599",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516599",
    },
    {
      identifier: "SAMN04516600",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516600",
    },
    {
      identifier: "SAMN04516601",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516601",
    },
    {
      identifier: "SAMN04516602",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516602",
    },
    {
      identifier: "SAMN04516603",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516603",
    },
    {
      identifier: "SAMN04516604",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516604",
    },
    {
      identifier: "SAMN04516605",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516605",
    },
    {
      identifier: "SAMN04516606",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516606",
    },
    {
      identifier: "SAMN04516607",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516607",
    },
    {
      identifier: "SAMN04516608",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516608",
    },
    {
      identifier: "SAMN04516609",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516609",
    },
    {
      identifier: "SAMN04516610",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516610",
    },
    {
      identifier: "SAMN04516611",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516611",
    },
    {
      identifier: "SAMN04516612",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516612",
    },
    {
      identifier: "SAMN04516613",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516613",
    },
    {
      identifier: "SAMN04516614",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516614",
    },
    {
      identifier: "SAMN04516615",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516615",
    },
    {
      identifier: "SAMN04516616",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516616",
    },
    {
      identifier: "SAMN04516617",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516617",
    },
    {
      identifier: "SAMN04516618",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516618",
    },
    {
      identifier: "SAMN04516619",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516619",
    },
    {
      identifier: "SAMN04516620",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516620",
    },
    {
      identifier: "SAMN04516621",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516621",
    },
    {
      identifier: "SAMN04516622",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516622",
    },
    {
      identifier: "SAMN04516623",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN04516623",
    },
    {
      identifier: "SRP071228",
      type: "sra-study",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-study/SRP071228",
    },
    {
      identifier: "SRR3208408",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208408",
    },
    {
      identifier: "SRR3208409",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208409",
    },
    {
      identifier: "SRR3208410",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208410",
    },
    {
      identifier: "SRR3208411",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208411",
    },
    {
      identifier: "SRR3208412",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208412",
    },
    {
      identifier: "SRR3208413",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208413",
    },
    {
      identifier: "SRR3208414",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208414",
    },
    {
      identifier: "SRR3208415",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208415",
    },
    {
      identifier: "SRR3208416",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208416",
    },
    {
      identifier: "SRR3208417",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208417",
    },
    {
      identifier: "SRR3208418",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208418",
    },
    {
      identifier: "SRR3208419",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208419",
    },
    {
      identifier: "SRR3208420",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208420",
    },
    {
      identifier: "SRR3208421",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208421",
    },
    {
      identifier: "SRR3208422",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208422",
    },
    {
      identifier: "SRR3208423",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208423",
    },
    {
      identifier: "SRR3208424",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208424",
    },
    {
      identifier: "SRR3208425",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208425",
    },
    {
      identifier: "SRR3208426",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208426",
    },
    {
      identifier: "SRR3208427",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208427",
    },
    {
      identifier: "SRR3208428",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208428",
    },
    {
      identifier: "SRR3208429",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208429",
    },
    {
      identifier: "SRR3208430",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208430",
    },
    {
      identifier: "SRR3208431",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208431",
    },
    {
      identifier: "SRR3208432",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208432",
    },
    {
      identifier: "SRR3208433",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208433",
    },
    {
      identifier: "SRR3208434",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208434",
    },
    {
      identifier: "SRR3208435",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208435",
    },
    {
      identifier: "SRR3208436",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208436",
    },
    {
      identifier: "SRR3208437",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208437",
    },
    {
      identifier: "SRR3208438",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208438",
    },
    {
      identifier: "SRR3208439",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208439",
    },
    {
      identifier: "SRR3208440",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208440",
    },
    {
      identifier: "SRR3208441",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208441",
    },
    {
      identifier: "SRR3208443",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208443",
    },
    {
      identifier: "SRR3208444",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208444",
    },
    {
      identifier: "SRR3208445",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208445",
    },
    {
      identifier: "SRR3208446",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208446",
    },
    {
      identifier: "SRR3208447",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208447",
    },
    {
      identifier: "SRR3208448",
      type: "sra-run",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR3208448",
    },
    {
      identifier: "SRX1617138",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617138",
    },
    {
      identifier: "SRX1617139",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617139",
    },
    {
      identifier: "SRX1617140",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617140",
    },
    {
      identifier: "SRX1617141",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617141",
    },
    {
      identifier: "SRX1617142",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617142",
    },
    {
      identifier: "SRX1617143",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617143",
    },
    {
      identifier: "SRX1617144",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617144",
    },
    {
      identifier: "SRX1617145",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617145",
    },
    {
      identifier: "SRX1617146",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617146",
    },
    {
      identifier: "SRX1617147",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617147",
    },
    {
      identifier: "SRX1617148",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617148",
    },
    {
      identifier: "SRX1617149",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617149",
    },
    {
      identifier: "SRX1617150",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617150",
    },
    {
      identifier: "SRX1617151",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617151",
    },
    {
      identifier: "SRX1617152",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617152",
    },
    {
      identifier: "SRX1617153",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617153",
    },
    {
      identifier: "SRX1617154",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617154",
    },
    {
      identifier: "SRX1617155",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617155",
    },
    {
      identifier: "SRX1617156",
      type: "sra-experiment",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/sra-experiment/SRX1617156",
    },
  ],
  dbXrefsCount: { "sra-run": 40, biosample: 40, "sra-study": 1, "sra-experiment": 40 },
};
