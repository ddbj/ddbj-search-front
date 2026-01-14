import { v4 as uuidv4 } from "uuid";

const typePrefixes: { [key: string]: string } = {
  bioproject: "PRJNA",
  biosample: "SAMN",
  "sra-run": "DRR",
  "sra-experiment": "SRX",
  "sra-sample": "DRS",
  "sra-analysis": "SRZ",
  "sra-submission": "ERA",
  "sra-study": "SRP",
  "jga-dataset": "JGAD",
  "jga-study": "JGAS",
  "jga-policy": "JGAP",
  "jga-dac": "JGAC",
};

export const makeDummyIdentifier = (type: string, length: number = 6): string => {
  const prefix = typePrefixes[type] || "UNKNOWN";
  const random = uuidv4().slice(0, length);

  return `${prefix}${random}`;
};
