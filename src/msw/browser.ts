import { setupWorker } from "msw/browser";
import { handlers } from "@/msw/handlers/search";

export const worker = setupWorker(...handlers);
