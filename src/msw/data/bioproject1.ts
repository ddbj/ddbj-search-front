import type { BioProjectDetailResponse } from "@/api/detail/bioProject.ts";

export const bioproject1: BioProjectDetailResponse = {
  identifier: "PRJNA16",
  properties: {
    Project: {
      Project: {
        ProjectID: { ArchiveID: { accession: "PRJNA16", archive: "NCBI", id: "16" } },
        ProjectDescr: {
          Name: "Azotobacter vinelandii DJ strain:DJ",
          Title: "Nitrogen-fixing bacterium",
          Description:
            "<P><B><I>Azotobacter vinelandii</B></I>. This organism will provide information on the proteins involved in nitrogen fixation and the production of PHB and alginate.",
          ExternalLink: [
            {
              category: "Related Resources",
              label: "Azotobacter Org",
              URL: "http://www.azotobacter.org",
            },
            {
              category: "Sequencing Centers",
              label: "DOE Joint Genome Institute",
              URL: "http://www.jgi.doe.gov/",
            },
            {
              category: "Other Databases",
              label: "GOLD",
              URL: "http://genomesonline.org/cgi-bin/GOLD/bin/GOLDCards.cgi?goldstamp=Gi00047",
            },
          ],
          Publication: {
            id: "19429624",
            status: "ePublished",
            Reference: null,
            StructuredCitation: {
              Title:
                "Genome sequence of Azotobacter vinelandii, an obligate aerobe specialized to support diverse anaerobic metabolic processes.",
              Journal: {
                JournalTitle: "Journal of bacteriology",
                Year: "2009",
                Volume: "191",
                Issue: "14",
                PagesFrom: "4534",
                PagesTo: "45",
              },
              AuthorSet: {
                Author: [
                  {
                    Name: { First: "João C", Last: "Setubal" },
                    Consortium:
                      "Virginia Bioinformatics Institute, Virginia Polytechnic Institute and State University, Blacksburg, VA 24061, USA. setubal@vbi.vt.edu",
                  },
                  { Name: { First: "Patricia", Last: "dos Santos" } },
                  { Name: { First: "Barry S", Last: "Goldman" } },
                  { Name: { First: "Helga", Last: "Ertesvåg" } },
                  { Name: { First: "Guadelupe", Last: "Espin" } },
                  { Name: { First: "Luis M", Last: "Rubio" } },
                  { Name: { First: "Svein", Last: "Valla" } },
                  { Name: { First: "Nalvo F", Last: "Almeida" } },
                  { Name: { First: "Divya", Last: "Balasubramanian" } },
                  { Name: { First: "Lindsey", Last: "Cromes" } },
                  { Name: { First: "Leonardo", Last: "Curatti" } },
                  { Name: { First: "Zijin", Last: "Du" } },
                  { Name: { First: "Eric", Last: "Godsy" } },
                  { Name: { First: "Brad", Last: "Goodner" } },
                  { Name: { First: "Kaitlyn", Last: "Hellner-Burris" } },
                  { Name: { First: "José A", Last: "Hernandez" } },
                  { Name: { First: "Katherine", Last: "Houmiel" } },
                  { Name: { First: "Juan", Last: "Imperial" } },
                  { Name: { First: "Christina", Last: "Kennedy" } },
                  { Name: { First: "Timothy J", Last: "Larson" } },
                  { Name: { First: "Phil", Last: "Latreille" } },
                  { Name: { First: "Lauren S", Last: "Ligon" } },
                  { Name: { First: "Jing", Last: "Lu" } },
                  { Name: { First: "Mali", Last: "Maerk" } },
                  { Name: { First: "Nancy M", Last: "Miller" } },
                  { Name: { First: "Stacie", Last: "Norton" } },
                  { Name: { First: "Ina P", Last: "O'Carroll" } },
                  { Name: { First: "Ian", Last: "Paulsen" } },
                  { Name: { First: "Estella C", Last: "Raulfs" } },
                  { Name: { First: "Rebecca", Last: "Roemer" } },
                  { Name: { First: "James", Last: "Rosser" } },
                  { Name: { First: "Daniel", Last: "Segura" } },
                  { Name: { First: "Steve", Last: "Slater" } },
                  { Name: { First: "Shawn L", Last: "Stricklin" } },
                  { Name: { First: "David J", Last: "Studholme" } },
                  { Name: { First: "Jian", Last: "Sun" } },
                  { Name: { First: "Carlos J", Last: "Viana" } },
                  { Name: { First: "Erik", Last: "Wallin" } },
                  { Name: { First: "Baomin", Last: "Wang" } },
                  { Name: { First: "Cathy", Last: "Wheeler" } },
                  { Name: { First: "Huijun", Last: "Zhu" } },
                  { Name: { First: "Dennis R", Last: "Dean" } },
                  { Name: { First: "Ray", Last: "Dixon" } },
                  { Name: { First: "Derek", Last: "Wood" } },
                ],
              },
            },
            DbType: "ePubmed",
          },
          ProjectReleaseDate: "2009-04-14T00:00:00Z",
          LocusTagPrefix: [
            { assembly_id: "GCA_000021045", biosample_id: "SAMN02604349", content: "AVIN" },
            { biosample_id: "SAMN19513674", content: "KNW24" },
          ],
        },
        ProjectType: {
          ProjectTypeSubmission: {
            Target: {
              capture: "eWhole",
              material: "eGenome",
              sample_scope: "eMultiisolate",
              Organism: {
                species: "354",
                taxID: "322710",
                OrganismName: "Azotobacter vinelandii DJ",
                Strain: "DJ",
                Supergroup: "eBacteria",
                BiologicalProperties: {
                  Morphology: { Gram: "eNegative", Motility: "eYes" },
                  Environment: {
                    OxygenReq: "eAerobic",
                    TemperatureRange: "eMesophilic",
                    Habitat: "eMultiple",
                  },
                },
                RepliconSet: {
                  Replicon: {
                    order: "1",
                    Type: { location: "eNuclearProkaryote", content: "eChromosome" },
                    Name: null,
                    Size: { units: "Mb", content: "5.365318" },
                  },
                  Count: { repliconType: "eOther", content: "1" },
                },
                GenomeSize: { units: "Kb", content: "5365.318000" },
              },
            },
            Method: { method_type: "eSequencing" },
            Objectives: { Data: { data_type: "eAssembly" } },
            ProjectDataTypeSet: { DataType: "Genome sequencing" },
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
              Name: { abbr: "DOE Joint Genome Institute", content: "DOE Joint Genome Institute" },
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
          ProjectIDRef: { archive: "NCBI", id: "16", accession: "PRJNA16" },
          Hierarchical: {
            type: "TopSingle",
            MemberID: { archive: "NCBI", id: "35043", accession: "PRJNA35043" },
          },
        },
      },
    },
  },
  distribution: [
    {
      type: "DataDownload",
      encodingFormat: "JSON",
      contentUrl: "https://ddbj-staging.nig.ac.jp/search/entry/bioproject/PRJNA16.json",
    },
  ],
  isPartOf: "BioProject",
  type: "bioproject",
  objectType: "BioProject",
  name: null,
  url: "https://ddbj-staging.nig.ac.jp/search/entry/bioproject/PRJNA16",
  organism: { identifier: "322710", name: "Azotobacter vinelandii DJ" },
  title: "Nitrogen-fixing bacterium",
  description:
    "<P><B><I>Azotobacter vinelandii</B></I>. This organism will provide information on the proteins involved in nitrogen fixation and the production of PHB and alginate.",
  organization: [
    {
      name: "DOE Joint Genome Institute",
      organizationType: "center",
      role: "participant",
      url: "http://genome.jgi-psf.org/draft_microbes/azovi/azovi.home.html",
      abbreviation: "DOE Joint Genome Institute",
    },
    {
      name: "US DOE Joint Genome Institute (JGI-PGF)",
      organizationType: "consortium",
      role: "owner",
      url: null,
      abbreviation: "US DOE Joint Genome Institute (JGI-PGF)",
    },
    {
      name: "Virginia Polytechnic Institute and State University, Virginia Bioinformatics Institute, USA, Blacksburg",
      organizationType: "center",
      role: "participant",
      url: null,
      abbreviation:
        "Virginia Polytechnic Institute and State University, Virginia Bioinformatics Institute, USA, Blacksburg",
    },
  ],
  publication: [
    {
      id: "19429624",
      title:
        "Genome sequence of Azotobacter vinelandii, an obligate aerobe specialized to support diverse anaerobic metabolic processes.",
      date: null,
      Reference: null,
      url: "https://pubmed.ncbi.nlm.nih.gov/19429624/",
      DbType: "ePubmed",
      status: "ePublished",
    },
  ],
  grant: [],
  externalLink: [
    { url: "http://www.azotobacter.org", label: "Azotobacter Org" },
    { url: "http://www.jgi.doe.gov/", label: "DOE Joint Genome Institute" },
    {
      url: "http://genomesonline.org/cgi-bin/GOLD/bin/GOLDCards.cgi?goldstamp=Gi00047",
      label: "GOLD",
    },
  ],
  sameAs: [],
  status: "live",
  accessibility: "public-access",
  dateCreated: "2003-02-25",
  dateModified: null,
  datePublished: "2009-04-14T00:00:00Z",
  dbXrefs: [
    {
      identifier: "GCA_000021045",
      type: "insdc-assembly",
      url: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000021045",
    },
    {
      identifier: "SAMN02604349",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN02604349",
    },
    {
      identifier: "SAMN19513674",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMN19513674",
    },
  ],
  dbXrefsCount: { "insdc-assembly": 1, biosample: 2 },
};
