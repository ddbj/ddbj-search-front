import { OpenApiGeneratorV31, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { bioProjectDetailRequestDoc } from "@/schema/api/detail/bioProject.ts";
import { bioSampleDetailRequestDoc } from "@/schema/api/detail/bioSample.ts";
import { geaDetailRequestDoc } from "@/schema/api/detail/gea.ts";
import { jgaDacDetailRequestDoc } from "@/schema/api/detail/jgaDac.ts";
import { jgaDatasetDetailRequestDoc } from "@/schema/api/detail/jgaDataset.ts";
import { jgaPolicyDetailRequestDoc } from "@/schema/api/detail/jgaPolicy.ts";
import { jgaStudyDetailRequestDoc } from "@/schema/api/detail/jgaStudy.ts";
import { metaboBankDetailRequestDoc } from "@/schema/api/detail/metaboBank.ts";
import { sraAnalysisDetailRequestDoc } from "@/schema/api/detail/sraAnalysis.ts";
import { sraExperimentDetailRequestDoc } from "@/schema/api/detail/sraExperiment.ts";
import { sraRunDetailRequestDoc } from "@/schema/api/detail/sraRun.ts";
import { sraSampleDetailRequestDoc } from "@/schema/api/detail/sraSample.ts";
import { sraStudyDetailRequestDoc } from "@/schema/api/detail/sraStudy.ts";
import { sraSubmissionDetailRequestDoc } from "@/schema/api/detail/sraSubmission.ts";
import { allEntryListRequestDoc } from "@/schema/api/entries/all.ts";
import { bioProjectListRequestDoc } from "@/schema/api/entries/bioProject.ts";
import { bioSampleListRequestDoc } from "@/schema/api/entries/bioSample.ts";
import { geaListRequestDoc } from "@/schema/api/entries/gea.ts";
import { jgaDacListRequestDoc } from "@/schema/api/entries/jgaDac.ts";
import { jgaDatasetListRequestDoc } from "@/schema/api/entries/jgaDataset.ts";
import { jgaPolicyListRequestDoc } from "@/schema/api/entries/jgaPolicy.ts";
import { jgaStudyListRequestDoc } from "@/schema/api/entries/jgaStudy.ts";
import { metaboBankListRequestDoc } from "@/schema/api/entries/metaboBank.ts";
import { sraAnalysisListRequestDoc } from "@/schema/api/entries/sraAnalysis.ts";
import { sraExperimentListRequestDoc } from "@/schema/api/entries/sraExperiment.ts";
import { sraRunListRequestDoc } from "@/schema/api/entries/sraRun.ts";
import { sraSampleListRequestDoc } from "@/schema/api/entries/sraSample.ts";
import { sraStudyListRequestDoc } from "@/schema/api/entries/sraStudy.ts";
import { sraSubmissionListRequestDoc } from "@/schema/api/entries/sraSubmission.ts";
import { allFacetListRequestDoc } from "@/schema/api/facets/all.ts";
import { bioProjectFacetListRequestDoc } from "@/schema/api/facets/bioProject.ts";
import { bioSampleFacetListRequestDoc } from "@/schema/api/facets/bioSample.ts";
import { geaFacetListRequestDoc } from "@/schema/api/facets/gea.ts";
import { jgaDacFacetListRequestDoc } from "@/schema/api/facets/jgaDac.ts";
import { jgaDatasetFacetListRequestDoc } from "@/schema/api/facets/jgaDataset.ts";
import { jgaPolicyFacetListRequestDoc } from "@/schema/api/facets/jgaPolicy.ts";
import { jgaStudyFacetListRequestDoc } from "@/schema/api/facets/jgaStudy.ts";
import { metaboBankFacetListRequestDoc } from "@/schema/api/facets/metaboBank.ts";
import { sraAnalysisFacetListRequestDoc } from "@/schema/api/facets/sraAnalysis.ts";
import { sraExperimentFacetListRequestDoc } from "@/schema/api/facets/sraExperiment.ts";
import { sraRunFacetListRequestDoc } from "@/schema/api/facets/sraRun.ts";
import { sraSampleFacetListRequestDoc } from "@/schema/api/facets/sraSample.ts";
import { sraStudyFacetListRequestDoc } from "@/schema/api/facets/sraStudy.ts";
import { sraSubmissionFacetListRequestDoc } from "@/schema/api/facets/sraSubmission.ts";
import { API_PATH_LIVE, API_PATH_STAGING } from "@/consts/paths.ts";
import { extendZod } from "@/lib/zod/extendZod.ts";

extendZod();

export const registry = new OpenAPIRegistry();
registry.registerPath(allEntryListRequestDoc);
registry.registerPath(bioProjectListRequestDoc);
registry.registerPath(bioSampleListRequestDoc);
registry.registerPath(geaListRequestDoc);
registry.registerPath(metaboBankListRequestDoc);
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
registry.registerPath(geaDetailRequestDoc);
registry.registerPath(metaboBankDetailRequestDoc);
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
registry.registerPath(allFacetListRequestDoc);
registry.registerPath(bioProjectFacetListRequestDoc);
registry.registerPath(bioSampleFacetListRequestDoc);
registry.registerPath(geaFacetListRequestDoc);
registry.registerPath(metaboBankFacetListRequestDoc);
registry.registerPath(jgaDatasetFacetListRequestDoc);
registry.registerPath(jgaDacFacetListRequestDoc);
registry.registerPath(jgaPolicyFacetListRequestDoc);
registry.registerPath(jgaStudyFacetListRequestDoc);
registry.registerPath(sraAnalysisFacetListRequestDoc);
registry.registerPath(sraExperimentFacetListRequestDoc);
registry.registerPath(sraRunFacetListRequestDoc);
registry.registerPath(sraSampleFacetListRequestDoc);
registry.registerPath(sraStudyFacetListRequestDoc);
registry.registerPath(sraSubmissionFacetListRequestDoc);

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
        url: API_PATH_LIVE,
        description: "DDBJ live server",
      },
      {
        url: API_PATH_STAGING,
        description: "DDBJ staging server",
      },
      {
        url: "http://localhost:5137/api/",
        description: "Development server",
      },
    ],
  });
};
