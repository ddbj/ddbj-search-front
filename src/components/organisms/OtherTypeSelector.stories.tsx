import { dbTypes } from "@/consts.ts";
import { OtherTypeSelector } from "./OtherTypeSelector.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: OtherTypeSelector,
  args: {},
  decorators: [],
} satisfies Meta<typeof OtherTypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    currentType: dbTypes["sra-analysis"],
  },
} satisfies Story;
