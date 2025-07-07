import { DateSelector } from "@/components/organisms/DateSelector.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateSelector,
  args: {},
  decorators: [],
} satisfies Meta<typeof DateSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
