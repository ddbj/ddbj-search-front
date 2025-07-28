import { ResultList } from "./ResultList.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ResultList,
  args: {},
  decorators: [],
} satisfies Meta<typeof ResultList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
