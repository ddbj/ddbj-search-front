import { TypeSelector } from "./TypeSelector.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: TypeSelector,
  args: {},
  decorators: [],
} satisfies Meta<typeof TypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
