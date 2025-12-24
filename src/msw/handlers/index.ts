import { countTypes } from "@/msw/handlers/count/countTypes.ts";
import { getBioProjectDetail } from "@/msw/handlers/detail/getBioProjectDetail.ts";
import { getBioSampleDetail } from "@/msw/handlers/detail/getBioSampleDetail.ts";
import { getJgaDacDetail } from "@/msw/handlers/detail/getJgaDacDetail.ts";
import { getJgaDatasetDetail } from "@/msw/handlers/detail/getJgaDatasetDetail.ts";
import { getJgaPolicyDetail } from "@/msw/handlers/detail/getJgaPolicyDetail.ts";
import { getJgaStudyDetail } from "@/msw/handlers/detail/getJgaStudyDetail.ts";
import { getSraAnalysisDetail } from "@/msw/handlers/detail/getSraAnalysisDetail.ts";
import { getSraExperimentDetail } from "@/msw/handlers/detail/getSraExperimentDetail.ts";
import { getSraRunDetail } from "@/msw/handlers/detail/getSraRunDetail.ts";
import { getSraSampleDetail } from "@/msw/handlers/detail/getSraSampleDetail.ts";
import { getSraStudyDetail } from "@/msw/handlers/detail/getSraStudyDetail.ts";
import { getSraSubmissionDetail } from "@/msw/handlers/detail/getSraSubmissionDetail.ts";
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
  // entries
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

  // details
  getBioProjectDetail,
  getBioSampleDetail,
  getSraRunDetail,
  getSraExperimentDetail,
  getSraSampleDetail,
  getSraAnalysisDetail,
  getSraSubmissionDetail,
  getSraStudyDetail,
  getJgaDatasetDetail,
  getJgaStudyDetail,
  getJgaPolicyDetail,
  getJgaDacDetail,
];
