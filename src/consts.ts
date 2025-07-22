export const dbTypes = {
  biosample: "biosample",
  bioproject: "bioproject",
  "sra-run": "sra-run",
  "sra-experiment": "sra-experiment",
  "sra-sample": "sra-sample",
  "sra-analysis": "sra-analysis",
  "sra-submission": "sra-submission",
  "sra-study": "sra-study",
  "jga-dataset": "jga-dataset",
  "jga-study": "jga-study",
  "jga-policy": "jga-policy",
  "jga-dac": "jga-dac",
} as const;
export type DBType = (typeof dbTypes)[keyof typeof dbTypes];
export const isDBType = (value: string): value is DBType => Object.values(dbTypes).includes(value);
export const dbTypeList = Object.keys(dbTypes).filter(isDBType);

export const dbLabels: { [K in DBType]: string } = {
  biosample: "BioSample",
  bioproject: "BioProject",
  "sra-run": "SRA Run",
  "sra-experiment": "SRA Experiment",
  "sra-sample": "SRA Sample",
  "sra-analysis": "SRA Analysis",
  "sra-submission": "SRA Submission",
  "sra-study": "SRA Study",
  "jga-dataset": "JGA Dataset",
  "jga-study": "JGA Study",
  "jga-policy": "JGA Policy",
  "jga-dac": "JGA DAC",
} as const;
export type DBLabel = (typeof dbLabels)[DBType];
