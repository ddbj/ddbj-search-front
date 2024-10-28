import { Meta, StoryObj } from "@storybook/react";
import { DetailTable } from "./DetailTable";
import { bioproject1 } from "@/data/bioproject1.ts";
import { bioproject3 } from "@/data/bioproject3.ts";
import { biosample1 } from "@/data/biosample1.ts";
import { sraExperiment1 } from "@/data/sraExperiment1.ts";
import { sraStudy1 } from "@/data/sraStudy1.ts";
import { ElasticSearchSource } from "@/types/api.ts";

export type RowProps = {
  data: ElasticSearchSource;
};

const meta: Meta<typeof DetailTable> = {
  component: DetailTable,
};
export default meta;

type Story = StoryObj<typeof DetailTable>;
export const Bioproject1: Story = {
  args: {
    data: bioproject1,
  },
};
export const Bioproject3: Story = {
  args: {
    data: bioproject3,
  },
};

export const SraStudy1: Story = {
  args: {
    data: sraStudy1,
  },
};

export const Biosample1: Story = {
  args: {
    data: biosample1,
  },
};

export const SraExperiment1: Story = {
  args: {
    data: sraExperiment1,
  },
};
