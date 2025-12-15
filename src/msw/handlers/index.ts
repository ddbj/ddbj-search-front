import { countTypes } from "@/msw/handlers/count/countTypes.ts";
import { getAllEntryList } from "@/msw/handlers/entries/getAllEntryList.ts";
import { getBioProjectList } from "@/msw/handlers/entries/getBioProjectList.ts";
import { getBioSampleList } from "@/msw/handlers/entries/getBioSampleList.ts";
import { getJgaDacList } from "@/msw/handlers/entries/getJgaDacList.ts";
import { getJgaDatasetList } from "@/msw/handlers/entries/getJgaDatasetList.ts";
import { getJgaPolicyList } from "@/msw/handlers/entries/getJgaPolicyList.ts";
import { getJgaStudyList } from "@/msw/handlers/entries/getJgaStudyList.ts";
import { getSraAnalysisList } from "@/msw/handlers/entries/getSraAnalysisList.ts";
import { getSraExperimentList } from "@/msw/handlers/entries/getSraExperimentList.ts";
import { getSraRunList } from "@/msw/handlers/entries/getSraRunList.ts";
import { getSraSampleList } from "@/msw/handlers/entries/getSraSampleList.ts";
import { getSraStudyList } from "@/msw/handlers/entries/getSraStudyList.ts";
import { getSraSubmissionList } from "@/msw/handlers/entries/getSraSubmissionList.ts";

export const handlers = [
  getAllEntryList,
  getBioProjectList,
  getBioSampleList,
  getSraRunList,
  getSraExperimentList,
  getSraSampleList,
  getSraAnalysisList,
  getSraSubmissionList,
  getSraStudyList,
  getJgaDatasetList,
  getJgaStudyList,
  getJgaPolicyList,
  getJgaDacList,
  countTypes,
];
