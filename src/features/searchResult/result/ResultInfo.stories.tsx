import { ResultInfo } from "./ResultInfo.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: ResultInfo,
  args: {
    pagination: {
      total: 123456,
      perPage: 20,
      page: 1,
    },
  },
  decorators: [],
} satisfies Meta<typeof ResultInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
