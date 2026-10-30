import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResultList } from "./ResultList.tsx";

const meta = {
  component: ResultList,
  args: {},
} satisfies Meta<typeof ResultList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    data: [],
  },
} satisfies Story;
