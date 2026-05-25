import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { biosample1 } from "@/msw/data/biosample1.ts";
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

export const BioSample = {
  args: {
    data: biosample1,
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText("Model")).toBeInTheDocument();
    await expect(await canvas.findByText("Generic")).toBeInTheDocument();
    await expect(await canvas.findByText("Package")).toBeInTheDocument();
    await expect(await canvas.findByText("Generic (Generic.1.0)")).toBeInTheDocument();
    await expect(await canvas.findByText("Collection Date")).toBeInTheDocument();
    await expect(await canvas.findByText("2022-07-19")).toBeInTheDocument();
    await expect(await canvas.findByText("Geographic Location")).toBeInTheDocument();
    await expect(await canvas.findByText("USA")).toBeInTheDocument();
    await expect(await canvas.findByText("Strain")).toBeInTheDocument();
    await expect(await canvas.findByText("BPH-1")).toBeInTheDocument();
    await expect(await canvas.findByText("Host")).toBeInTheDocument();
    await expect(await canvas.findAllByText("Homo sapiens")).toHaveLength(2);
    await expect(await canvas.findByText("Isolate")).toBeInTheDocument();
    await expect(await canvas.findAllByText("BPH-1-M-E2")).toHaveLength(2);
    await expect(await canvas.findByText("Derived From")).toBeInTheDocument();
    await expect(await canvas.findByRole("link", { name: "PRJNA860307" })).toBeInTheDocument();
  },
} satisfies Story;

export const SraRun = {
  args: {
    data: makeSraRunDetail("DRR000001"),
  },
} satisfies Story;
