import { BioprojectPublication } from "./BioprojectPublication.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: BioprojectPublication,
  args: {},
  decorators: [],
} satisfies Meta<typeof BioprojectPublication>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
