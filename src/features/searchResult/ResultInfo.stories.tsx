import { ResultInfo } from "./ResultInfo.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ResultInfo,
  args: {},
  decorators: [],
} satisfies Meta<typeof ResultInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
