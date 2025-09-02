import { ResultCard } from "./ResultCard.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ResultCard,
  args: {},
  decorators: [],
} satisfies Meta<typeof ResultCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    title: "Invertebrate sample from Magallana gigas",
    id: "SAMN30489498",
    type: "biosample",
    relations: {
      bioproject: 1,
      "sra-run": 1,
      "sra-sample": 1,
      "sra-experiment": 1,
    },
  },
} satisfies Story;
