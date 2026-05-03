import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";

const meta = {
  component: SearchDetailLayout,
  args: {},
  decorators: [],
} satisfies Meta<typeof SearchDetailLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BioProject1 = {
  args: {
    data: bioproject1,
  },
} satisfies Story;

export const BioProject2 = {
  args: {
    data: bioproject2,
  },
} satisfies Story;

export const SraRun = {
  args: {
    data: makeSraRunDetail("DRR000001"),
  },
} satisfies Story;
