import { getAllEntryList } from "@/msw/handlers/entries/getAllEntryList.ts";
import { getBioProjectList } from "@/msw/handlers/entries/getBioProjectList.ts";
import { getBioSampleList } from "@/msw/handlers/entries/getBioSampleList.ts";

export const handlers = [getAllEntryList, getBioProjectList, getBioSampleList];
