import { http, HttpResponse } from "msw";
import { API_PATH_TYPE_COUNT } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";

export const countTypes = http.get(API_PATH_TYPE_COUNT, async ({ request: _request }) => {
  // Create a response object with counts for each db type
  const response = Object.keys(dbTypes).reduce<Record<string, number>>((acc, type) => {
    // Generate a random count between 100 and 10000 for each type
    acc[type] = Math.floor(Math.random() * 9900) + 100;
    return acc;
  }, {});

  return HttpResponse.json(response);
});
