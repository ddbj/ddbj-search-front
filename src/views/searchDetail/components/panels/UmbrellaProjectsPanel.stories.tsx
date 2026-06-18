import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Xref } from "@/api/detail/base.ts";
import { UmbrellaProjectsPanel } from "@/views/searchDetail/components/panels/UmbrellaProjectsPanel.tsx";

const meta = {
  component: UmbrellaProjectsPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof UmbrellaProjectsPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

const parentProjects: Xref[] = [
  {
    identifier: "PRJDB1001",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1001",
  },
  {
    identifier: "PRJEB2048",
    type: "bioproject",
    url: "https://www.ebi.ac.uk/ena/browser/view/PRJEB2048",
  },
];

const childProjects: Xref[] = [
  {
    identifier: "PRJDB1101",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1101",
  },
  {
    identifier: "PRJDB1102",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1102",
  },
  {
    identifier: "PRJNA998877",
    type: "bioproject",
    url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA998877",
  },
];

const denseChildProjects: Xref[] = [
  {
    identifier: "PRJDB1201",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1201",
  },
  {
    identifier: "PRJDB1202",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1202",
  },
  {
    identifier: "PRJDB1203",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1203",
  },
  {
    identifier: "PRJDB1204",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1204",
  },
  {
    identifier: "PRJDB1205",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1205",
  },
  {
    identifier: "PRJDB1206",
    type: "bioproject",
    url: "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1206",
  },
];

export const ParentsOnly = {
  args: {
    parentProjects,
    childProjects: [],
  },
} satisfies Story;

export const ChildrenOnly = {
  args: {
    parentProjects: [],
    childProjects,
  },
} satisfies Story;

export const ParentAndChildren = {
  args: {
    parentProjects,
    childProjects,
  },
} satisfies Story;

export const DenseChildren = {
  args: {
    parentProjects: parentProjects.slice(0, 1),
    childProjects: denseChildProjects,
  },
} satisfies Story;
