import { describe, expect, it } from "vitest";
import { getUmbrellaProjectsProps } from "@/features/searchDetail/panels/UmbrellaProjectsPanel.tsx";
import type { Xref } from "@/api/detail/base.ts";

const parentBioProjects: Xref[] = [
  {
    identifier: "PRJDB1",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1",
  },
];

const childBioProjects: Xref[] = [
  {
    identifier: "PRJDB2",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB2",
  },
];

const bioProjectResponse = {
  type: "bioproject",
  parentBioProjects,
  childBioProjects,
} satisfies Parameters<typeof getUmbrellaProjectsProps>[0];

const bioSampleResponse = {
  type: "biosample",
} satisfies Parameters<typeof getUmbrellaProjectsProps>[0];

describe("getUmbrellaProjectsProps", () => {
  it("returns parent and child BioProjects for bioproject responses", () => {
    const result = getUmbrellaProjectsProps(bioProjectResponse);

    expect(result).toEqual({
      childProjects: childBioProjects,
      parentProjects: parentBioProjects,
    });
  });

  it("returns null for non-bioproject responses", () => {
    const result = getUmbrellaProjectsProps(bioSampleResponse);

    expect(result).toBeNull();
  });
});
