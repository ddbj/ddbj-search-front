type SampleAttribute = {
  TAG: string;
  VALUE: string;
};

type SampleAttributes = {
  SAMPLE_ATTRIBUTE: SampleAttribute[];
};

type Sample = {
  SAMPLE_ATTRIBUTES?: SampleAttributes;
};

export type SraSampleProperties = {
  SAMPLE_SET?: {
    SAMPLE?: Sample;
  };
};
