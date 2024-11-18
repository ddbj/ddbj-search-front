import { BioProject } from "@/types/bioProject.ts";

// check organization, publication, external link
export const bioproject1: BioProject = {
  identifier: "PRJNA16",
  organism: {
    identifier: "322710",
    name: "Azotobacter vinelandii DJ",
  },
  visibility: "unrestricted-access",
  externalLink: [
    {
      label: "Azotobacter Org",
      url: "http://www.azotobacter.org",
    },
    {
      label: "DOE Joint Genome Institute",
      url: "http://www.jgi.doe.gov/",
    },
    {
      label: "GOLD",
      url: "http://genomesonline.org/cgi-bin/GOLD/bin/GOLDCards.cgi?goldstamp=Gi00047",
    },
  ],
  description:
    "<P><B><I>Azotobacter vinelandii</B></I>. This organism will provide information on the proteins involved in nitrogen fixation and the production of PHB and alginate.",
  dbXref: [
    {
      identifier: "GCA_000021045",
      type: "assemblies",
      url: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000021045/",
    },
    {
      identifier: "SAMN19513674",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN19513674",
    },
    {
      identifier: "SAMN02604349",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
    },
  ],
  dateModified: "2024-11-18T11:15:39Z",
  accession: "PRJNA16",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/search/entry/bioproject/PRJNA16.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
  ],
  isPartOf: "BioProject",
  type: "bioproject",
  title: "Nitrogen-fixing bacterium",
  url: "https://ddbj.nig.ac.jp/search/entry/bioproject/PRJNA16",
  objectType: "BioProject",
  datePublished: "2009-04-14T00:00:00Z",
  dateCreated: "2003-02-25",
  organization: [
    {
      organizationType: "center",
      role: "participant",
      name: "DOE Joint Genome Institute",
      abbreviation: "DOE Joint Genome Institute",
      url: "http://genome.jgi-psf.org/draft_microbes/azovi/azovi.home.html",
    },
    {
      organizationType: "consortium",
      role: "owner",
      name: "US DOE Joint Genome Institute (JGI-PGF)",
      abbreviation: "US DOE Joint Genome Institute (JGI-PGF)",
      url: "",
    },
    {
      organizationType: "center",
      role: "participant",
      name: "Virginia Polytechnic Institute and State University, Virginia Bioinformatics Institute, USA, Blacksburg",
      abbreviation:
        "Virginia Polytechnic Institute and State University, Virginia Bioinformatics Institute, USA, Blacksburg",
      url: "",
    },
  ],
  publication: [
    {
      date: "",
      Reference: null,
      id: "19429624",
      title:
        "Genome sequence of Azotobacter vinelandii, an obligate aerobe specialized to support diverse anaerobic metabolic processes.",
      url: "https://pubmed.ncbi.nlm.nih.gov/19429624/",
      DbType: "ePubmed",
      status: "ePublished",
    },
  ],
  name: "",
  grant: [],
  properties: {
    Project: {
      Project: {
        ProjectDescr: {
          Description:
            "<P><B><I>Azotobacter vinelandii</B></I>. This organism will provide information on the proteins involved in nitrogen fixation and the production of PHB and alginate.",
          ProjectReleaseDate: "2009-04-14T00:00:00Z",
          Title: "Nitrogen-fixing bacterium",
          Publication: {
            Reference: null,
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
                  content: "5365.318000",
                },
                species: "354",
                taxID: "322710",
                OrganismName: "Azotobacter vinelandii DJ",
                Supergroup: "eBacteria",
                RepliconSet: {
                  Count: {
                    repliconType: "eOther",
                    content: "1",
                  },
                  Replicon: {
                    Type: {
                      location: "eNuclearProkaryote",
                      content: "eChromosome",
                    },
                    Size: {
                      units: "Mb",
                      content: "5.365318",
                    },
                    order: "1",
                    Name: null,
                  },
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
              DataType: "Genome sequencing",
            },
            Objectives: {
              Data: {
                data_type: "eAssembly",
              },
            },
            Method: {
              method_type: "eSequencing",
            },
          },
        },
        ProjectID: {
          ArchiveID: {
            archive: "NCBI",
            accession: "PRJNA16",
            id: "16",
          },
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
      ProjectLinks: {
        Link: {
          ProjectIDRef: {
            archive: "NCBI",
            id: "16",
            accession: "PRJNA16",
          },
          Hierarchical: {
            MemberID: {
              archive: "NCBI",
              id: "35043",
              accession: "PRJNA35043",
            },
            type: "TopSingle",
          },
        },
      },
    },
  },
  sameAs: [],
  status: "public",
};
