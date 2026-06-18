import type { Xref } from "@/api/detail/base.ts";
import type { SearchDetailResponse } from "@/api/types.ts";

type UmbrellaProjectsSource =
  | {
      type: "bioproject";
      childBioProjects: Xref[];
      parentBioProjects: Xref[];
    }
  | {
      type: Exclude<SearchDetailResponse["type"], "bioproject">;
    };

type UmbrellaProjectsPanelProps = {
  childProjects: Xref[];
  parentProjects: Xref[];
};

export const getUmbrellaProjectsProps = (
  res: UmbrellaProjectsSource,
): UmbrellaProjectsPanelProps | null => {
  if (res.type === "bioproject") {
    return {
      childProjects: res.childBioProjects,
      parentProjects: res.parentBioProjects,
    };
  } else {
    return null;
  }
};
