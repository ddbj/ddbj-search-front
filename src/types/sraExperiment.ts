type Instrument = {
  INSTRUMENT_MODEL: string;
};

type Platform = Record<string, Instrument>;

type LibraryDescriptor = {
  LIBRARY_SOURCE: string;
  LIBRARY_CONSTRUCTION_PROTOCOL: string;
  LIBRARY_STRATEGY: string;
  LIBRARY_LAYOUT: {}; // Assuming no further details provided, otherwise, define its structure
  LIBRARY_NAME: string;
  LIBRARY_SELECTION: string;
};

type SampleDescriptorIdentifiers = {
  PRIMARY_ID: {
    content: string;
  };
  EXTERNAL_ID: Array<{
    namespace: string;
    content: string;
  }>;
};

type SampleDescriptor = {
  IDENTIFIERS: SampleDescriptorIdentifiers;
  accession: string;
};

type Design = {
  DESIGN_DESCRIPTION: string;
  LIBRARY_DESCRIPTOR: LibraryDescriptor;
  SAMPLE_DESCRIPTOR: SampleDescriptor;
};

type Identifiers = {
  PRIMARY_ID: {
    content: string;
  };
  EXTERNAL_ID: Array<{
    namespace: string;
    content: string;
  }>;
};

type StudyRefIdentifiers = Identifiers; // Reusing Identifiers as the structure is identical

type StudyRef = {
  IDENTIFIERS: StudyRefIdentifiers;
  accession: string;
};

type Experiment = {
  PLATFORM: Platform;
  DESIGN: Design;
  alias: string;
  IDENTIFIERS: Identifiers;
  TITLE: string;
  accession: string;
  STUDY_REF: StudyRef;
};
export type SraExperimentProperties = Experiment;
