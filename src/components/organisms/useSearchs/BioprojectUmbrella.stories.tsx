import { BioprojectUmbrella } from "./BioprojectUmbrella.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: BioprojectUmbrella,
  args: {},
  decorators: [],
} satisfies Meta<typeof BioprojectUmbrella>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
