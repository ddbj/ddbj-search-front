import { BioprojectGrant } from "./BioprojectGrant.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: BioprojectGrant,
  args: {},
  decorators: [],
} satisfies Meta<typeof BioprojectGrant>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
