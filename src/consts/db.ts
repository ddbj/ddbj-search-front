export const dbTypes = {
  bioproject: "bioproject",
  biosample: "biosample",
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

const umbrellaBioProject = {
  key: "umbrella-bioproject",
  label: "Umbrella BioProject",
};

export type DBType = (typeof dbTypes)[keyof typeof dbTypes];
export const isDBType = (value: string): value is DBType => Object.values(dbTypes).includes(value);
export const dbTypeList = Object.keys(dbTypes).filter(isDBType);
export const xrefTypeList = [umbrellaBioProject.key, ...dbTypeList];

export const dbLabels: { [K in DBType]: string } = {
  bioproject: "BioProject",
  biosample: "BioSample",
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

export const getDbLabel = (str: string): string => {
  const result = dbLabels[str as DBType];
  return result ? result : str;
};
export const getXrefDbLabel = (str: string): string => {
  if (str === umbrellaBioProject.key) return umbrellaBioProject.label;
  const result = dbLabels[str as DBType];
  return result ? result : str;
};
