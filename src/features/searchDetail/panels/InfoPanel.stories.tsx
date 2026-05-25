import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";
import { InfoPanel } from "./InfoPanel.tsx";

const meta = {
  component: InfoPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof InfoPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    data: bioproject1,
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText("Project Type")).toBeInTheDocument();
    await expect(await canvas.findByText("Genome sequencing")).toBeInTheDocument();
    await expect(canvas.queryByText("Relevance")).not.toBeInTheDocument();
    await expect(await canvas.findByText("External Links")).toBeInTheDocument();
    await expect(await canvas.findByRole("link", { name: "Azotobacter Org" })).toBeInTheDocument();
  },
} satisfies Story;

export const BioProjectWithRelevance = {
  args: {
    data: bioproject2,
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText("Project Type")).toBeInTheDocument();
    await expect(await canvas.findByText("raw sequence reads")).toBeInTheDocument();
    await expect(await canvas.findByText("Relevance")).toBeInTheDocument();
    await expect(await canvas.findByText("Agricultural")).toBeInTheDocument();
    await expect(canvas.queryByText("External Links")).not.toBeInTheDocument();
  },
} satisfies Story;

export const SraRun = {
  args: {
    data: makeSraRunDetail("DRR000001"),
  },
} satisfies Story;
