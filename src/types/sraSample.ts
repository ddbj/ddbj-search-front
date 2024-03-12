type SampleName = {
  TAXON_ID: number;
  SCIENTIFIC_NAME: string;
};

type PrimaryId = {
  content: string;
};

type ExternalId = {
  namespace: string;
  content: string;
};

type Identifiers = {
  PRIMARY_ID: PrimaryId;
  EXTERNAL_ID: ExternalId[];
};

type SampleAttribute = {
  TAG: string;
  VALUE: string;
};

type SampleAttributes = {
  SAMPLE_ATTRIBUTE: SampleAttribute[];
};

type Sample = {
  SAMPLE_NAME: SampleName;
  alias: string;
  IDENTIFIERS: Identifiers;
  TITLE: string;
  accession: string;
  SAMPLE_ATTRIBUTES: SampleAttributes;
};

export type SraSampleProperties = Sample;
