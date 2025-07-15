export const dbTypes = [
  "biosample",
  "bioproject",
  "sra-run",
  "sra-experiment",
  "sra-sample",
  "sra-analysis",
  "sra-submission",
  "sra-study",
  "jga-dataset",
  "jga-study",
  "jga-policy",
  "jga-dac",
] as const;
export type DBType = (typeof dbTypes)[number];
export const isDBType = (value?: string): value is DBType => dbTypes.includes(value as DBType);

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
