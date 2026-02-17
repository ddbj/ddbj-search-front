import { XrefPanel } from "./XrefPanel.tsx";
import type { Xref } from "@/api/components.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: XrefPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof XrefPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

const data1: Xref[] = [
  {
    identifier: "GCA_000021045",
    type: "assemblies",
    url: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000021045/",
  },
  {
    identifier: "SAMN02604349",
    type: "sra-run",
    url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
  },
  {
    identifier: "SAMN19513674",
    type: "biosample",
    url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN19513674",
  },
  {
    identifier: "SAMN02604349",
    type: "biosample",
    url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
  },
];

export const Primary = {
  args: {
    xrefs: data1,
    count: {
      assemblies: 1,
      biosample: 2,
      sra_run: 1,
    },
  },
} satisfies Story;
