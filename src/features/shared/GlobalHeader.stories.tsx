import { GlobalHeader } from "./GlobalHeader.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: GlobalHeader,
  args: {},
  decorators: [],
} satisfies Meta<typeof GlobalHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    breadcrumbsPaths: [],
  },
} satisfies Story;
