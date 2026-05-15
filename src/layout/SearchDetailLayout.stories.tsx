import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, screen } from "storybook/test";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { biosample1 } from "@/msw/data/biosample1.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";
import { sraSample1 } from "@/msw/data/sraSample1.ts";

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

export const BioSample = {
  args: {
    data: biosample1,
  },
  play: async () => {
    await expect(await screen.findByText("Attributes")).toBeInTheDocument();
    await expect(await screen.findByText("source name")).toBeInTheDocument();
    await expect((await screen.findAllByText("ATCC cell line cells")).length).toBeGreaterThan(0);
  },
} satisfies Story;

export const SraSample = {
  args: {
    data: sraSample1,
  },
  play: async () => {
    await expect(await screen.findByText("Attributes")).toBeInTheDocument();
    await expect(await screen.findByText("ArrayExpress-SPECIES")).toBeInTheDocument();
    await expect((await screen.findAllByText("Streptococcus pneumoniae")).length).toBeGreaterThan(
      0,
    );
  },
} satisfies Story;

export const SraRun = {
  args: {
    data: makeSraRunDetail("DRR000001"),
  },
} satisfies Story;
