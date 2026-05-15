import { describe, expect, it } from "vitest";
import type { SearchDetailResponse } from "@/api/types.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";
import { getGrants, getOrganizations, getPublications } from "./searchDetailRowSelectors.ts";

const bioSampleResponse = {
  identifier: "SAMN000001",
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: "2024-01-02T00:00:00Z",
  datePublished: "2024-01-03T00:00:00Z",
  title: "BioSample Title",
  organism: null,
  description: null,
  type: "biosample",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [],
  dbXrefsCount: {},
  properties: {},
  distribution: [],
  isPartOf: "BioSample",
  name: null,
  url: null,
  sameAs: [],
  organization: null,
  publication: [],
  grant: [],
  attributes: [],
} satisfies SearchDetailResponse;

describe("getOrganizations", () => {
  it("returns organizations for sra-run responses", () => {
    const sraRunResponse = makeSraRunDetail("DRR000001");

    const result = getOrganizations(sraRunResponse);

    expect(result).toEqual(sraRunResponse.organization);
  });

  it("returns organization field for other detail responses", () => {
    const result = getOrganizations(bioSampleResponse);

    expect(result).toEqual(bioSampleResponse.organization);
  });
});

describe("getPublications", () => {
  it("returns publication field for every detail response", () => {
    const result = getPublications(bioSampleResponse);

    expect(result).toEqual(bioSampleResponse.publication);
  });
});

describe("getGrants", () => {
  it("returns grant field for every detail response", () => {
    const result = getGrants(bioSampleResponse);

    expect(result).toEqual(bioSampleResponse.grant);
  });
});
