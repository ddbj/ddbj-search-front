import { Umbrella } from "./Umbrella.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Umbrella,
  args: {},
  decorators: [],
} satisfies Meta<typeof Umbrella>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
