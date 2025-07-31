import { setupWorker } from "msw/browser";
import { handlers } from "@/msw/handlers/index.ts";

export const worker = setupWorker(...handlers);
