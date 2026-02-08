type Instrument = {
  INSTRUMENT_MODEL: string;
};

type Platform = Record<string, Instrument>;

type LibraryDescriptor = {
  LIBRARY_SOURCE: string;
  LIBRARY_CONSTRUCTION_PROTOCOL: string;
  LIBRARY_STRATEGY: string;
  LIBRARY_LAYOUT: {};
  LIBRARY_NAME: string;
  LIBRARY_SELECTION: string;
};

type Design = {
  DESIGN_DESCRIPTION: string;
  LIBRARY_DESCRIPTOR: LibraryDescriptor;
};

type Experiment = {
  PLATFORM: Platform;
  DESIGN: Design;
};

export type SraExperimentProperties = {
  EXPERIMENT_SET?: {
    EXPERIMENT?: Experiment;
  };
};
