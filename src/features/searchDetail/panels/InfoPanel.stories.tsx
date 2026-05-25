import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { bioproject2 } from "@/msw/data/bioproject2.ts";
import { biosample1 } from "@/msw/data/biosample1.ts";
import { makeSraAnalysisDetail } from "@/msw/data/sraAnalysis.ts";
import { makeSraExperimentDetail } from "@/msw/data/sraExperiment.ts";
import { makeSraRunDetail } from "@/msw/data/sraRun.ts";
import { sraSample1 } from "@/msw/data/sraSample1.ts";
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

export const SraSample = {
  args: {
    data: sraSample1,
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText("Collection Date")).toBeInTheDocument();
    await expect(await canvas.findByText("2020-02-12")).toBeInTheDocument();
    await expect(await canvas.findByText("Geographic Location")).toBeInTheDocument();
    await expect(await canvas.findByText("United Kingdom")).toBeInTheDocument();
    await expect(await canvas.findByText("Derived From")).toBeInTheDocument();
    await expect(await canvas.findByRole("link", { name: "SAMEA4967388" })).toBeInTheDocument();
  },
} satisfies Story;

export const SraExperiment = {
  args: {
    data: makeSraExperimentDetail("SRX000001"),
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText("Instrument Model")).toBeInTheDocument();
    await expect(await canvas.findByText("NextSeq 500")).toBeInTheDocument();
    await expect(await canvas.findByText("Library Layout")).toBeInTheDocument();
    await expect(await canvas.findByText("PAIRED")).toBeInTheDocument();
    await expect(await canvas.findByText("Library Selection")).toBeInTheDocument();
    await expect(await canvas.findByText("PCR")).toBeInTheDocument();
    await expect(await canvas.findByText("Library Source")).toBeInTheDocument();
    await expect(await canvas.findByText("TRANSCRIPTOMIC")).toBeInTheDocument();
    await expect(await canvas.findByText("Library Strategy")).toBeInTheDocument();
    await expect(await canvas.findByText("RNA-Seq")).toBeInTheDocument();
    await expect(await canvas.findByText("Platform")).toBeInTheDocument();
    await expect(await canvas.findByText("ILLUMINA")).toBeInTheDocument();
    await expect(await canvas.findByText("Library Name")).toBeInTheDocument();
    await expect(await canvas.findByText("MSW SRA Experiment Library")).toBeInTheDocument();
    await expect(await canvas.findByText("Library Construction Protocol")).toBeInTheDocument();
    await expect(
      await canvas.findByText("PolyA RNA was isolated and prepared for paired-end sequencing."),
    ).toBeInTheDocument();
  },
} satisfies Story;

export const SraAnalysis = {
  args: {
    data: makeSraAnalysisDetail("SRZ000001"),
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText("Analysis Type")).toBeInTheDocument();
    await expect(await canvas.findByText("SEQUENCE_VARIATION")).toBeInTheDocument();
  },
} satisfies Story;

export const SraAnalysisWithoutAnalysisType = {
  args: {
    data: {
      ...makeSraAnalysisDetail("SRZ000002"),
      analysisType: null,
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.queryByText("Analysis Type")).not.toBeInTheDocument();
  },
} satisfies Story;

export const SraRun = {
  args: {
    data: makeSraRunDetail("DRR000001"),
  },
} satisfies Story;
