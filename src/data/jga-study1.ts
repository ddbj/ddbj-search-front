import { ElasticSearchSource } from "@/types/api.ts";

export const jgaStudy1: ElasticSearchSource = {
  identifier: "JGAS000004",
  organism: {
    identifier: 9606,
    name: "Homo sapiens",
  },
  visibility: "unrestricted-access",
  downloadUrl: null,
  description:
    "The treatment outcome of glioma patients remains disappointing, and more studies are needed to improve therapeutic strategies. In particular, it is crucial to understand the mechanisms underlying resistance to treatment and malignant transformation, as well as the intratumoral heterogeneity and interaction of tumor cells and host immunity. Recent advances in omics analysis techniques, such as next-generation sequencing (NGS), have enabled us to obtain omics data more easily and accelerated our ability to integrate this information and precisely characterize cases. In our project, we have already collected more than 100 pairs of human glioma/normal tissue samples, of which some are multiple specimens collected from initial and recurrent tumors, and some include multiple specimens collected from different regions within a single tumor. We used our in-house algorithms, composed of alignment and variant calling programs, to analyze omics data from multiple platforms, such as whole-exome sequencing (WES), RNA sequencing (RNA-seq), and methylation array, with our original cohort of glioma patients. Using several informatics tools, the information about genetic and epigenetic status and expression signatures were analyzed. Those data are expected to provide key information for investigating the mechanisms discussed above. Through this project, we hope to improve strategies for personalized therapy based on comprehensive omics data.",
  dateModified: "2020-09-24T07:29:49+09:00",
  title:
    "Genomic and Genetic Analysis of Brain Tumors and Analysis of Their Clinicopathological Significance",
  type: "jga-study",
  isPartOf: "jga",
  distribution: [
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/jga-study/JGAS000004.json",
      encodingFormat: "JSON",
      type: "DataDownload",
    },
    {
      contentUrl: "https://ddbj.nig.ac.jp/resource/jga-study/JGAS000004.jsonld",
      encodingFormat: "JSON-LD",
      type: "DataDownload",
    },
  ],
  dbXrefs: [
    {
      identifier: "JGAD000004",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/resource/jga-dataset/JGAD000004",
    },
    {
      identifier: "JGAD000106",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/resource/jga-dataset/JGAD000106",
    },
    {
      identifier: "JGAD000107",
      type: "jga-dataset",
      url: "https://ddbj.nig.ac.jp/resource/jga-dataset/JGAD000107",
    },
    {
      identifier: "JGAP000004",
      type: "jga-policy",
      url: "https://ddbj.nig.ac.jp/resource/jga-policy/JGAP000004",
    },
    {
      identifier: "JGAC000001",
      type: "jga-dac",
      url: "https://ddbj.nig.ac.jp/resource/jga-dac/JGAC000001",
    },
  ],
  url: "https://ddbj.nig.ac.jp/resource/jga-study/JGAS000004",
  datePublished: "2020-09-28T02:15:20+09:00",
  dateCreated: "2014-09-08T08:23:12+09:00",
  name: "JSUB000007_Study_0001",
  dbXrefsStatistics: [
    {
      count: 3,
      type: "jga-dataset",
    },
    {
      count: 1,
      type: "jga-policy",
    },
    {
      count: 1,
      type: "jga-dac",
    },
  ],
  properties: {
    PUBLICATIONS: {
      PUBLICATION: [
        {
          DB_TYPE: "PUBMED",
          id: "24336570",
          status: "published",
        },
        {
          DB_TYPE: "PUBMED",
          id: "28270234",
          status: "published",
        },
      ],
    },
    DESCRIPTOR: {
      STUDY_TITLE:
        "Genomic and Genetic Analysis of Brain Tumors and Analysis of Their Clinicopathological Significance",
      STUDY_ABSTRACT:
        "The treatment outcome of glioma patients remains disappointing, and more studies are needed to improve therapeutic strategies. In particular, it is crucial to understand the mechanisms underlying resistance to treatment and malignant transformation, as well as the intratumoral heterogeneity and interaction of tumor cells and host immunity. Recent advances in omics analysis techniques, such as next-generation sequencing (NGS), have enabled us to obtain omics data more easily and accelerated our ability to integrate this information and precisely characterize cases. In our project, we have already collected more than 100 pairs of human glioma/normal tissue samples, of which some are multiple specimens collected from initial and recurrent tumors, and some include multiple specimens collected from different regions within a single tumor. We used our in-house algorithms, composed of alignment and variant calling programs, to analyze omics data from multiple platforms, such as whole-exome sequencing (WES), RNA sequencing (RNA-seq), and methylation array, with our original cohort of glioma patients. Using several informatics tools, the information about genetic and epigenetic status and expression signatures were analyzed. Those data are expected to provide key information for investigating the mechanisms discussed above. Through this project, we hope to improve strategies for personalized therapy based on comprehensive omics data.",
      STUDY_TYPES: {
        STUDY_TYPE: [
          {
            existing_study_type: "Tumor vs. Matched-Normal",
          },
          {
            existing_study_type: "Exome Sequencing",
          },
          {
            existing_study_type: "Transcriptome Sequencing",
          },
          {
            new_study_type: "DNA methylation array",
            existing_study_type: "Other",
          },
        ],
      },
    },
    center_name: "Individual",
    alias: "JSUB000007_Study_0001",
    IDENTIFIERS: {
      SECONDARY_ID: "JGAS00000000004",
    },
    accession: "JGAS000004",
    GRANTS: {
      GRANT: [
        {
          AGENCY: {
            abbr: "MEXT",
            content: "Ministry of Education, Culture, Sports, Science and Technology",
          },
          grant_id: "",
          TITLE: "P-DIRECT: Project for Development of Innovative Research on Cancer Therapeutics",
        },
      ],
    },
    STUDY_ATTRIBUTES: {
      STUDY_ATTRIBUTE: [
        {
          TAG: "NBDC Number",
          VALUE: "hum0006",
        },
        {
          TAG: "Submitting organization",
          VALUE: "Department of Neurosurgery, The University of Tokyo",
        },
        {
          TAG: "Principal Investigator",
          VALUE: "Nobuhito Saito",
        },
      ],
    },
  },
  sameAs: null,
  status: "public",
};
