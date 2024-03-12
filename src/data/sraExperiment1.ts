import { ElasticSearchSource } from "@/types/api.ts";

export const sraExperiment1: ElasticSearchSource = {
  identifier: "SRX15301329",
  organism: null,
  visibility: "unrestricted-access",
  downloadUrl: [
    {
      name: "SRA1421433.experiment.xml",
      ftpUrl:
        "ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/SRA142/SRA1421433/SRA1421433.experiment.xml",
      type: "meta",
      url: "https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/SRA142/SRA1421433/SRA1421433.experiment.xml",
    },
  ],
  description: null,
  dateModified: "2022-05-20T04:02:21Z",
  title:
    "GSM6160351: low-affinity ZF with clamp, input DNA, replicate 2; Saccharomyces cerevisiae; ChIP-Seq",
  type: "sra-experiment",
  isPartOf: "sra",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-experiment/SRX15301329.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/sra-experiment/SRX15301329.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "SRA1421433",
      type: "sra-submission",
      url: "https://ddbj.nig.ac.jp/resource/sra-submission/SRA1421433",
    },
    {
      identifier: "SRP375608",
      type: "bioproject",
      url: "https://ddbj.nig.ac.jp/resource/bioproject/SRP375608",
    },
    {
      identifier: "SRS13027464",
      type: "biosample",
      url: "https://ddbj.nig.ac.jp/resource/biosample/SRS13027464",
    },
    {
      identifier: "SRR19240564",
      type: "sra-run",
      url: "https://ddbj.nig.ac.jp/resource/sra-run/SRR19240564",
    },
    {
      identifier: "SRP375608",
      type: "sra-study",
      url: "https://ddbj.nig.ac.jp/resource/sra-study/SRP375608",
    },
    {
      identifier: "SRS13027464",
      type: "sra-sample",
      url: "https://ddbj.nig.ac.jp/resource/sra-sample/SRS13027464",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/sra-experiment/SRX15301329",
  datePublished: "2022-05-20T04:02:21Z",
  dateCreated: "2022-05-17T12:56:42Z",
  name: "GSM6160351_r1",
  dbXrefsStatistics: [
    {
      count: 1,
      type: "bioproject",
    },
    {
      count: 1,
      type: "sra-run",
    },
    {
      count: 1,
      type: "sra-submission",
    },
    {
      count: 1,
      type: "biosample",
    },
    {
      count: 1,
      type: "sra-study",
    },
    {
      count: 1,
      type: "sra-sample",
    },
  ],
  properties: {
    PLATFORM: {
      ILLUMINA: {
        INSTRUMENT_MODEL: "NextSeq 550",
      },
    },
    DESIGN: {
      DESIGN_DESCRIPTION: "",
      LIBRARY_DESCRIPTOR: {
        LIBRARY_SOURCE: "GENOMIC",
        LIBRARY_CONSTRUCTION_PROTOCOL:
          "All cultures were diluted to OD600 0.525, then cells were crosslinked with 1% formaldehyde (from a 37% stock, Fisher) for 9 minutes at 30C with shaking. Fixation was quenched with a final concentrations of 125 mM glycine (EMD 4840 OmniPur) for 10 min at 30C with shaking. Cells were pelleted for 10 min at 4C at 3000 rpm (Haraeus Multifuge X3R), washed twice with ice-cold TE (Tris-HCl, EDTA), transferred to 4 bead-beater tubes/strain (orginally 250 mL culture) and frozen at -80C. Cell pellets were resuspended in 400 uL ice cold lysis buffer (50 mM HEPES, 140 mM NaCl, 1mM ethylenediaminetetraacetic acid, 1% Triton X-100, 0.1% Na-Deoxycholate, 1 mM phenylmythylsulfonyl fluoride, 200 uL Roche cOmplete protease inhibitors). 0.5 mm diameter glass beads were added to 1 mm below the meniscus. Cells were lysed by bead beating on a MagNA Lyser (Roche) three times for 45 s each at 4500 rpm with 2 min rests at 4C. Lysate was collected by puncturing the tube with a 21G needle and centrifugation at 2000 g for 2 min into a 2 mL microtube. The pellet was resuspended in lysis buffer, then sonicated for 6 pulses using a probe sonicator (Ngo Lab, Boston University) for 20 s at 25% amplitude with 2 min. intervening rests on ice, achieving a range of 150-1500 bp DNA fragments. Cell debris was pelleted by centrifiguation at max speed for 15 min at 4C. FLAG-tagged S.pombe generously shared by the Winston Lab (FWP567) was used as a spike-in control and was prepared similarly to the S.cerevisiae strains with a few modifications (grown in 250 mL YES media to OD600 0.65, split into 5 tubes, underwent 4 lysis steps on the bead beater and 5 sonication steps). The supernatant from the 4 preps of each strain (5 preps of S.pombe) were mixed together in a new low retention tube. To determine DNA concentration, 50 uL samples from each strain was isolated.  Samples were brought up to 200 uL with elution buffer, then incubated with 50 ug of RNAse A (Thermo Fisher Scientific) at 37C for 30 minutes to remove RNA.  Then 100 ug of Proteinase K (Thermo Fisher Scientific) was added and samples were incubated overnight (~16 hours) at 60C to degrade proteins and reverse crosslinks. Samples were then purified with the ChIP DNA Clean and Concentrator kit (Zymo Research), eluted with 100 uL water and concentrations were determined by Qubit 4 Fluorometer (Thermo Fisher Scientific). 50 uL were brought to 13.5 ng/uL concentration and split into 4 separate tubes, diluted to 1 mL lysis buffer. Input samples were concurrently isolated at 10% of the DNA concentration for the IP samples and brought to 100 uL lysis buffer. 1 ug anti-FLAG (Sigma F1804) were added to each IP sample. The prepared (lysed and sonicated) FLAG-tagged S.pombe chromatin was added as a spike-in control to 10% of the sample DNA concentration for all IP and input samples. Input samples were stored at 4C and IP samples rotated overnight at 4C. 30 uL Dynabeads Protein G (10004D, Thermo Fisher Scientific) per culture was added to a low retention tube and washed 3 times with 1 mL ice cold lysis buffer. Dynabeads were resuspended in 100 uL lysis buffer per culture. 100 uL of Dynabead solution was added to each antibody-pulldown sample and incubated at 4C for 4 hrs while rotating. Dynabeads were washed at room temperature on a magnet (twice with 1 mL lysis buffer, twice with 1 mL lysis buffer/500 mM NaCl, twice with 10 mM TrisHCl-pH8/250 mM LiCl/0.5% NP-40/0.5% sodium deoxycholate/1 mM EDTA, and once with 1 mL TE). Bound material was eluted by adding 200 uL of 50 mM Tris-HCl ph8/10 mM EDTA/1% SDS and incubating at 65C for 30 min. A second elution with the same buffer was combined with the first and tubes were incubated at 65C overnight to reverse crosslinks. Input samples were brought to 400 uL elution buffer and stored at 65C with antibody-pulldown samples. 50 ug of RNase A was added to each pulldown and input sample and incubated at 37C for 30 mins. 100 ug Proteinase K was added to each sample, then incubated at 55C for 4 hours.   DNA was purified with the ChIP Clean and Concentrator ChIP (4 preps/strain were concentrated into two preps in two columns) and eluted with 25 uL of water for IP samples/column (50 uL total) or 200 uL water for input samples and stored at -80C. Sample concentrations were measured with Qubit. Illumina TruSeq ChIP",
        LIBRARY_STRATEGY: "ChIP-Seq",
        LIBRARY_LAYOUT: {},
        LIBRARY_NAME: "GSM6160351",
        LIBRARY_SELECTION: "ChIP",
      },
      SAMPLE_DESCRIPTOR: {
        IDENTIFIERS: {
          PRIMARY_ID: {
            content: "SRS13027464",
          },
          EXTERNAL_ID: [
            {
              namespace: "GEO",
              content: "GSM6160351",
            },
          ],
        },
        accession: "SRS13027464",
      },
    },
    alias: "GSM6160351_r1",
    IDENTIFIERS: {
      PRIMARY_ID: {
        content: "SRX15301329",
      },
      EXTERNAL_ID: [
        {
          namespace: "GEO",
          content: "GSM6160351_r1",
        },
      ],
    },
    TITLE:
      "GSM6160351: low-affinity ZF with clamp, input DNA, replicate 2; Saccharomyces cerevisiae; ChIP-Seq",
    accession: "SRX15301329",
    STUDY_REF: {
      IDENTIFIERS: {
        PRIMARY_ID: {
          content: "SRP375608",
        },
        EXTERNAL_ID: [
          {
            namespace: "BioProject",
            content: "PRJNA838835",
          },
        ],
      },
      accession: "SRP375608",
    },
  },
  sameAs: null,
  status: "public",
};
