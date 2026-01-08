import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { sraSample1 } from "@/msw/data/sraSample1.ts";
import { DownloadPanel } from "./DownloadPanel.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DownloadPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof DownloadPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BioProject = {
  args: {
    data: bioproject1,
  },
} satisfies Story;
export const SraSample = {
  args: {
    data: sraSample1,
  },
} satisfies Story;
