import { describe, expect, it } from "vitest";
import type { ZodObject } from "zod";
import { allSearchSchema } from "@/schema/search/all.ts";
import { baseSearchSchema } from "@/schema/search/base.ts";
import { bioprojectSearchSchema } from "@/schema/search/bioProject.ts";
import { biosampleSearchSchema } from "@/schema/search/bioSample.ts";
import { geaSearchSchema } from "@/schema/search/gea.ts";
import { jgaDacSearchSchema } from "@/schema/search/jgaDac.ts";
import { jgaDatasetSearchSchema } from "@/schema/search/jgaDataset.ts";
import { jgaPolicySearchSchema } from "@/schema/search/jgaPolicy.ts";
import { jgaStudySearchSchema } from "@/schema/search/jgaStudy.ts";
import { metaboBankSearchSchema } from "@/schema/search/metaboBank.ts";
import { sraAnalysisSearchSchema } from "@/schema/search/sraAnalysis.ts";
import { sraExperimentSearchSchema } from "@/schema/search/sraExperiment.ts";
import { sraRunSearchSchema } from "@/schema/search/sraRun.ts";
import { sraSampleSearchSchema } from "@/schema/search/sraSample.ts";
import { sraStudySearchSchema } from "@/schema/search/sraStudy.ts";
import { sraSubmissionSearchSchema } from "@/schema/search/sraSubmission.ts";

const detailFilterInput = {
  organization: "DDBJ",
  publication: "Nature",
  grant: "AMED",
};

const publicationOnlySchemas = [
  ["GEA", geaSearchSchema],
  ["JGA DAC", jgaDacSearchSchema],
  ["JGA Dataset", jgaDatasetSearchSchema],
  ["JGA Policy", jgaPolicySearchSchema],
  ["MetaboBank", metaboBankSearchSchema],
  ["SRA Analysis", sraAnalysisSearchSchema],
  ["SRA Experiment", sraExperimentSearchSchema],
  ["SRA Run", sraRunSearchSchema],
  ["SRA Sample", sraSampleSearchSchema],
  ["SRA Study", sraStudySearchSchema],
  ["SRA Submission", sraSubmissionSearchSchema],
] satisfies [string, ZodObject][];

describe("baseSearchSchema", () => {
  it("keeps numeric organism values", () => {
    expect(baseSearchSchema.parse({ organism: "562" }).organism).toBe("562");
  });

  it("keeps non-numeric organism values", () => {
    expect(baseSearchSchema.parse({ organism: "abc" }).organism).toBe("abc");
  });

  it("strips filters that are not common to all entry routes", () => {
    const result = baseSearchSchema.parse({
      organization: "DDBJ",
      publication: "Nature",
      grant: "AMED",
    });

    expect(result).toEqual({ organization: "DDBJ" });
  });
});

describe("DB-specific search schemas", () => {
  it("keeps only organization on the all-entry route", () => {
    expect(allSearchSchema.parse(detailFilterInput)).toEqual({
      organization: "DDBJ",
    });
  });

  it("keeps only organization on BioSample", () => {
    expect(biosampleSearchSchema.parse(detailFilterInput)).toEqual({
      organization: "DDBJ",
    });
  });

  it("keeps organization, publication, and grant on BioProject", () => {
    expect(bioprojectSearchSchema.parse(detailFilterInput)).toEqual(detailFilterInput);
  });

  it("keeps organization, publication, and grant on JGA Study", () => {
    expect(jgaStudySearchSchema.parse(detailFilterInput)).toEqual(detailFilterInput);
  });

  it.each(publicationOnlySchemas)("keeps publication but strips grant on %s", (_, schema) => {
    expect(schema.parse(detailFilterInput)).toEqual({
      organization: "DDBJ",
      publication: "Nature",
    });
  });
});
