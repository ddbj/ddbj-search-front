import { OpenApiGeneratorV31, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { typeCountRequestDoc } from "@/api/count/types.ts";
import { bioProjectDetailRequestDoc } from "@/api/detail/bioProject.ts";
import { bioSampleDetailRequestDoc } from "@/api/detail/bioSample.ts";
import { jgaDacDetailRequestDoc } from "@/api/detail/jgaDac.ts";
import { jgaDatasetDetailRequestDoc } from "@/api/detail/jgaDataset.ts";
import { jgaPolicyDetailRequestDoc } from "@/api/detail/jgaPolicy.ts";
import { jgaStudyDetailRequestDoc } from "@/api/detail/jgaStudy.ts";
import { sraAnalysisDetailRequestDoc } from "@/api/detail/sraAnalysis.ts";
import { sraExperimentDetailRequestDoc } from "@/api/detail/sraExperiment.ts";
import { sraRunDetailRequestDoc } from "@/api/detail/sraRun.ts";
import { sraSampleDetailRequestDoc } from "@/api/detail/sraSample.ts";
import { sraStudyDetailRequestDoc } from "@/api/detail/sraStudy.ts";
import { sraSubmissionDetailRequestDoc } from "@/api/detail/sraSubmission.ts";
import { allEntryListRequestDoc } from "@/api/entries/all.ts";
import { bioProjectListRequestDoc } from "@/api/entries/bioProject.ts";
import { bioSampleListRequestDoc } from "@/api/entries/bioSample.ts";
import { jgaDacListRequestDoc } from "@/api/entries/jgaDac.ts";
import { jgaDatasetListRequestDoc } from "@/api/entries/jgaDataset.ts";
import { jgaPolicyListRequestDoc } from "@/api/entries/jgaPolicy.ts";
import { jgaStudyListRequestDoc } from "@/api/entries/jgaStudy.ts";
import { sraAnalysisListRequestDoc } from "@/api/entries/sraAnalysis.ts";
import { sraExperimentListRequestDoc } from "@/api/entries/sraExperiment.ts";
import { sraRunListRequestDoc } from "@/api/entries/sraRun.ts";
import { sraSampleListRequestDoc } from "@/api/entries/sraSample.ts";
import { sraStudyListRequestDoc } from "@/api/entries/sraStudy.ts";
import { sraSubmissionListRequestDoc } from "@/api/entries/sraSubmission.ts";

export const registry = new OpenAPIRegistry();
registry.registerPath(allEntryListRequestDoc);
registry.registerPath(bioProjectListRequestDoc);
registry.registerPath(bioSampleListRequestDoc);
registry.registerPath(jgaDatasetListRequestDoc);
registry.registerPath(jgaDacListRequestDoc);
registry.registerPath(jgaPolicyListRequestDoc);
registry.registerPath(jgaStudyListRequestDoc);
registry.registerPath(sraAnalysisListRequestDoc);
registry.registerPath(sraExperimentListRequestDoc);
registry.registerPath(sraRunListRequestDoc);
registry.registerPath(sraSampleListRequestDoc);
registry.registerPath(sraStudyListRequestDoc);
registry.registerPath(sraSubmissionListRequestDoc);
registry.registerPath(bioProjectDetailRequestDoc);
registry.registerPath(bioSampleDetailRequestDoc);
registry.registerPath(sraRunDetailRequestDoc);
registry.registerPath(sraExperimentDetailRequestDoc);
registry.registerPath(sraSampleDetailRequestDoc);
registry.registerPath(sraAnalysisDetailRequestDoc);
registry.registerPath(sraSubmissionDetailRequestDoc);
registry.registerPath(sraStudyDetailRequestDoc);
registry.registerPath(jgaDatasetDetailRequestDoc);
registry.registerPath(jgaStudyDetailRequestDoc);
registry.registerPath(jgaPolicyDetailRequestDoc);
registry.registerPath(jgaDacDetailRequestDoc);
registry.registerPath(typeCountRequestDoc);

export const getDocs = () => {
  const generator = new OpenApiGeneratorV31(registry.definitions);
  return generator.generateDocument({
    openapi: "3.1.0",
    info: {
      title: "DDBJ SEARCH API",
      version: "0.0.0",
      // description
    },
    servers: [
      {
        url: "http://localhost:5137",
        description: "Development server",
      },
    ],
  });
};
