import { ElasticSearchSource } from "@/types/api.ts";

export const bioproject1: ElasticSearchSource = {
  identifier: "PRJNA16",
  organism: {
    identifier: 322710,
    name: "Azotobacter vinelandii DJ",
  },
  visibility: "unrestricted-access",
  downloadUrl: [
    {
      name: "bioproject.xml",
      ftpUrl: "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/bioproject/bioproject.xml",
      type: "meta",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/bioproject/bioproject.xml",
    },
  ],
  description:
    "<P><B><I>Azotobacter vinelandii</B></I>. This organism will provide information on the proteins involved in nitrogen fixation and the production of PHB and alginate.",
  dateModified: "2003-02-25T00:00:00Z",
  title: "Nitrogen-fixing bacterium",
  type: "bioproject",
  isPartOf: "bioproject",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA16.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA16.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "SAMN02604349",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
    },
    {
      identifier: "SAMN19513674",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN19513674",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJNA16",
  datePublished: "2009-04-14T00:00:00Z",
  dateCreated: "2003-02-25T00:00:00Z",
  name: "Azotobacter vinelandii DJ strain:DJ",
  dbXrefsStatistics: [
    {
      count: 2,
      type: "biosample",
    },
  ],
  properties: {
    Project: {
      Project: {
        ProjectDescr: {
          Description:
            "<P><B><I>Azotobacter vinelandii</B></I>. This organism will provide information on the proteins involved in nitrogen fixation and the production of PHB and alginate.",
          ProjectReleaseDate: "2009-04-14T00:00:00Z",
          Title: "Nitrogen-fixing bacterium",
          Publication: [
            {
              Reference: "",
              StructuredCitation: {
                AuthorSet: {
                  Author: [
                    {
                      Consortium:
                        "Virginia Bioinformatics Institute, Virginia Polytechnic Institute and State University, Blacksburg, VA 24061, USA. setubal@vbi.vt.edu",
                      Name: {
                        Last: "Setubal",
                        First: "João C",
                      },
                    },
                    {
                      Name: {
                        Last: "dos Santos",
                        First: "Patricia",
                      },
                    },
                    {
                      Name: {
                        Last: "Goldman",
                        First: "Barry S",
                      },
                    },
                    {
                      Name: {
                        Last: "Ertesvåg",
                        First: "Helga",
                      },
                    },
                    {
                      Name: {
                        Last: "Espin",
                        First: "Guadelupe",
                      },
                    },
                    {
                      Name: {
                        Last: "Rubio",
                        First: "Luis M",
                      },
                    },
                    {
                      Name: {
                        Last: "Valla",
                        First: "Svein",
                      },
                    },
                    {
                      Name: {
                        Last: "Almeida",
                        First: "Nalvo F",
                      },
                    },
                    {
                      Name: {
                        Last: "Balasubramanian",
                        First: "Divya",
                      },
                    },
                    {
                      Name: {
                        Last: "Cromes",
                        First: "Lindsey",
                      },
                    },
                    {
                      Name: {
                        Last: "Curatti",
                        First: "Leonardo",
                      },
                    },
                    {
                      Name: {
                        Last: "Du",
                        First: "Zijin",
                      },
                    },
                    {
                      Name: {
                        Last: "Godsy",
                        First: "Eric",
                      },
                    },
                    {
                      Name: {
                        Last: "Goodner",
                        First: "Brad",
                      },
                    },
                    {
                      Name: {
                        Last: "Hellner-Burris",
                        First: "Kaitlyn",
                      },
                    },
                    {
                      Name: {
                        Last: "Hernandez",
                        First: "José A",
                      },
                    },
                    {
                      Name: {
                        Last: "Houmiel",
                        First: "Katherine",
                      },
                    },
                    {
                      Name: {
                        Last: "Imperial",
                        First: "Juan",
                      },
                    },
                    {
                      Name: {
                        Last: "Kennedy",
                        First: "Christina",
                      },
                    },
                    {
                      Name: {
                        Last: "Larson",
                        First: "Timothy J",
                      },
                    },
                    {
                      Name: {
                        Last: "Latreille",
                        First: "Phil",
                      },
                    },
                    {
                      Name: {
                        Last: "Ligon",
                        First: "Lauren S",
                      },
                    },
                    {
                      Name: {
                        Last: "Lu",
                        First: "Jing",
                      },
                    },
                    {
                      Name: {
                        Last: "Maerk",
                        First: "Mali",
                      },
                    },
                    {
                      Name: {
                        Last: "Miller",
                        First: "Nancy M",
                      },
                    },
                    {
                      Name: {
                        Last: "Norton",
                        First: "Stacie",
                      },
                    },
                    {
                      Name: {
                        Last: "O'Carroll",
                        First: "Ina P",
                      },
                    },
                    {
                      Name: {
                        Last: "Paulsen",
                        First: "Ian",
                      },
                    },
                    {
                      Name: {
                        Last: "Raulfs",
                        First: "Estella C",
                      },
                    },
                    {
                      Name: {
                        Last: "Roemer",
                        First: "Rebecca",
                      },
                    },
                    {
                      Name: {
                        Last: "Rosser",
                        First: "James",
                      },
                    },
                    {
                      Name: {
                        Last: "Segura",
                        First: "Daniel",
                      },
                    },
                    {
                      Name: {
                        Last: "Slater",
                        First: "Steve",
                      },
                    },
                    {
                      Name: {
                        Last: "Stricklin",
                        First: "Shawn L",
                      },
                    },
                    {
                      Name: {
                        Last: "Studholme",
                        First: "David J",
                      },
                    },
                    {
                      Name: {
                        Last: "Sun",
                        First: "Jian",
                      },
                    },
                    {
                      Name: {
                        Last: "Viana",
                        First: "Carlos J",
                      },
                    },
                    {
                      Name: {
                        Last: "Wallin",
                        First: "Erik",
                      },
                    },
                    {
                      Name: {
                        Last: "Wang",
                        First: "Baomin",
                      },
                    },
                    {
                      Name: {
                        Last: "Wheeler",
                        First: "Cathy",
                      },
                    },
                    {
                      Name: {
                        Last: "Zhu",
                        First: "Huijun",
                      },
                    },
                    {
                      Name: {
                        Last: "Dean",
                        First: "Dennis R",
                      },
                    },
                    {
                      Name: {
                        Last: "Dixon",
                        First: "Ray",
                      },
                    },
                    {
                      Name: {
                        Last: "Wood",
                        First: "Derek",
                      },
                    },
                  ],
                },
                Title:
                  "Genome sequence of Azotobacter vinelandii, an obligate aerobe specialized to support diverse anaerobic metabolic processes.",
                Journal: {
                  Issue: "14",
                  Year: "2009",
                  Volume: "191",
                  JournalTitle: "Journal of bacteriology",
                  PagesFrom: "4534",
                  PagesTo: "45",
                },
              },
              id: "19429624",
              DbType: "ePubmed",
              status: "ePublished",
            },
          ],
          ExternalLink: [
            {
              label: "Azotobacter Org",
              category: "Related Resources",
              URL: "http://www.azotobacter.org",
            },
            {
              label: "DOE Joint Genome Institute",
              category: "Sequencing Centers",
              URL: "http://www.jgi.doe.gov/",
            },
            {
              label: "GOLD",
              category: "Other Databases",
              URL: "http://genomesonline.org/cgi-bin/GOLD/bin/GOLDCards.cgi?goldstamp=Gi00047",
            },
          ],
          LocusTagPrefix: [
            {
              assembly_id: "GCA_000021045",
              biosample_id: "SAMN02604349",
              content: "AVIN",
            },
            {
              biosample_id: "SAMN19513674",
              content: "KNW24",
            },
          ],
          Name: "Azotobacter vinelandii DJ strain:DJ",
        },
        ProjectType: {
          ProjectTypeSubmission: {
            Target: {
              sample_scope: "eMultiisolate",
              Organism: {
                GenomeSize: {
                  units: "Kb",
                  content: "5365.318",
                },
                species: "354",
                taxID: 322710,
                OrganismName: "Azotobacter vinelandii DJ",
                Supergroup: "eBacteria",
                RepliconSet: {
                  Count: [
                    {
                      repliconType: "eOther",
                      content: "1",
                    },
                  ],
                  Replicon: [
                    {
                      Type: {
                        location: "eNuclearProkaryote",
                        content: "eChromosome",
                      },
                      Size: {
                        units: "Mb",
                        content: "5.365318",
                      },
                      order: "1",
                      Name: "",
                    },
                  ],
                },
                BiologicalProperties: {
                  Morphology: {
                    Motility: "eYes",
                    Gram: "eNegative",
                  },
                  Environment: {
                    TemperatureRange: "eMesophilic",
                    Habitat: "eMultiple",
                    OxygenReq: "eAerobic",
                  },
                },
                Strain: "DJ",
              },
              material: "eGenome",
              capture: "eWhole",
            },
            ProjectDataTypeSet: {
              DataType: ["Genome sequencing"],
            },
            Objectives: {
              Data: [
                {
                  data_type: "eAssembly",
                },
              ],
            },
            Method: {
              method_type: "eSequencing",
            },
          },
        },
        ProjectID: {
          ArchiveID: [
            {
              archive: "NCBI",
              accession: "PRJNA16",
              id: "16",
            },
          ],
        },
      },
      Submission: {
        submitted: "2003-02-25",
        Description: {
          Organization: [
            {
              role: "participant",
              type: "center",
              url: "http://genome.jgi-psf.org/draft_microbes/azovi/azovi.home.html",
              Name: {
                abbr: "DOE Joint Genome Institute",
                content: "DOE Joint Genome Institute",
              },
            },
            {
              role: "owner",
              type: "consortium",
              Name: {
                abbr: "US DOE Joint Genome Institute (JGI-PGF)",
                content: "US DOE Joint Genome Institute (JGI-PGF)",
              },
            },
            {
              role: "participant",
              type: "center",
              Name: {
                abbr: "Virginia Polytechnic Institute and State University, Virginia Bioinformatics Institute, USA, Blacksburg",
                content:
                  "Virginia Polytechnic Institute and State University, Virginia Bioinformatics Institute, USA, Blacksburg",
              },
            },
          ],
          Access: "public",
        },
      },
    },
  },
  sameAs: null,
  status: "public",
};
