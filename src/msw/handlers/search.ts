import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("/api/search", () => {
    return HttpResponse.json({ hello: "world" });
  }),
];
